import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({});

  const { employeeId } = useParams();

  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", employeeId);
    getEmployeeById(employeeId).then((response) => {
      setEmployee(response);
    });
  }, []);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">
        Location: {employee.location?.name}
      </div>
      <button
        onClick={() => {
          history.push(`/employees/edit/${employee.id}`);
        }}
      >
        Edit
      </button>
    </section>
  );
};
