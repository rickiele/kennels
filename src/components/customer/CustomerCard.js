import React from "react"
import "./Customer.css"

// Therefore, I'm going to create another component for displaying an customer. 
export const CustomerCard = () => (
    <section className="customer">
        <h3 className="customer__name">Customer</h3>
        <div className="customer__breed">Breed: Human</div>
    </section>
)