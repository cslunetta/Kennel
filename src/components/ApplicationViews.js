import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route path="/animals">
          <h2>Animals</h2>
          <AnimalList />
        </Route>
      </AnimalProvider>

      {/* Render */}
      <EmployeeProvider>
        <Route path="/employees">
          <h2>Employees</h2>
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      {/* Render */}
      <LocationProvider>
        <Route path="/locations">
          <h2>Locations</h2>
          <LocationList />
        </Route>
      </LocationProvider>

      {/* Render */}
      <CustomerProvider>
      <Route path="/customers">
        <h2>Customers</h2>
        <CustomerList />
      </Route>
      </CustomerProvider>
    </>
  );
};
