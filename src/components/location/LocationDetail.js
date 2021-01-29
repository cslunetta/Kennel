import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationContext } from "./LocationProvider";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);

  const [location, setLocation] = useState({});

  const { locationId } = useParams();

  useEffect(() => {
    console.log("useEffect", locationId);
    getLocationById(locationId).then((response) => {
      setLocation(response);
    });
  }, []);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__location">{location.address}</div>

      <div className="location__employees">
        <h4>Employees</h4>
        <ul>
          {location.employees?.map((employee) => {
            return <li key={employee.id}>{employee.name}</li>;
          })}
        </ul>
      </div>

      <div className="location__animals">
        <h4>Pets</h4>
        <ul>
          {location.animals?.map((animal) => {
            return <li key={animal.id}>{animal.name}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};
