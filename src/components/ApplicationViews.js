//react modules
import React from "react";
import { Route } from "react-router-dom";

// data providers for access to children elements.
import { AnimalProvider } from "./animal/AnimalProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { CustomerProvider } from "./customer/CustomerProvider";

// View loaded on pageload
import { Home } from "./Home";

// Animal list view with button routing to form for adding an additional animal
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";

// Employee list view with button routing to form for adding an addditional employee
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";

// Location list view with button routing to form for adding an addditional location
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";

import { CustomerList } from "./customer/CustomerList";

// Application views is the routing map for what is shown on the main portion of the application.
export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/animals/create">
              <AnimalForm />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      {/* Render employee list */}
      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>

          <Route path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>

      {/* Render location list */}
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
        <Route path="/locations/create">
          <LocationForm />
        </Route>
      </LocationProvider>

      {/* Render customer list */}
      <CustomerProvider>
        <Route path="/customers">
          <h2>Customers</h2>
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};
