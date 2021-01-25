import React from "react"
import "./Location.css"

// Therefore, I'm going to create another component for displaying an location. 
export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
    </section>
)