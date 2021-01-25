import React from "react"
import "./Customer.css"

// Therefore, I'm going to create another component for displaying an customer. 
export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="location__address">{customer.address}</address>
    </section>
)