import React from "react"
import "./Location.css"

// Therefore, I'm going to create another component for displaying an location. 
export const LocationCard = () => (
    <section className="location">
        <h3 className="location__name">Doodles</h3>
        <div className="location__breed">Breed: Poodle</div>
    </section>
)