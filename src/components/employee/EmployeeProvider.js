import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employeeObj) => {
    return fetch("https://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeObj),
    }).then(getEmployees);
  };

  const getEmployeeById = (id) => {
    return fetch(
      `http://localhost:8088/employees/${id}?_expand=location`
    ).then((res) => res.json());
  };

  const updateEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        getEmployeeById,
        updateEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
