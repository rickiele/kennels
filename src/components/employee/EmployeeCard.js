import React from "react"
import "./Employee.css"

// Therefore, I'm going to create another component for displaying an employee. 
export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location.name}</div>
    </section>
)