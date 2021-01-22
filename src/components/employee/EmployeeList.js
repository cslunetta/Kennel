import { useEffect, useContext } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {employees.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />;
      })}
    </div>
  );
};
