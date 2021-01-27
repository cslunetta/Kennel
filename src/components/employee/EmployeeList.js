import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  const history = useHistory();

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push("/employees/create");
        }}
      >
        Add Employee
      </button>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {employees.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </div>
    </>
  );
};
