import React from "react"
import "./Animal.css"

// Therefore, I'm going to create another component for displaying an animal. 
export const AnimalCard = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)