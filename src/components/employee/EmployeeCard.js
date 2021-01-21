import React from "react"
import "./Employee.css"

// Therefore, I'm going to create another component for displaying an employee. 
export const EmployeeCard = () => (
    <section className="employee">
        <h3 className="employee__name">Doodles</h3>
        <div className="employee__breed">Breed: Poodle</div>
    </section>
)