import React from "react";
import "./Animal.css";

export const AnimalCard = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <address className="location__address">{location.name}</address>
    <div className="customer__name">{customer.name}</div>
  </section>
);
