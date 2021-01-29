import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext);

  const [animal, setAnimal] = useState({});

  const { animalId } = useParams();

  useEffect(() => {
    console.log("useEffect", animalId);
    getAnimalById(animalId).then((response) => {
      setAnimal(response);
    });
  }, []);

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <br></br>

      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}
      >
        Edit
      </button>
      <button onClick={handleRelease}>Release Animal</button>
    </section>
  );
};
