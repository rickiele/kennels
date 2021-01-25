import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

// ... // When you see "..." in example code, it basically means "etc"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    
    // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the animal form component.
    const history = useHistory()

    return (
        <div className="animals">
          <h2>Animals</h2>
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
          {
            animals.map(animal => {
              const owner = customers.find(c => c.id === animal.customerId)
              return <AnimalCard key={animal.id} animal={animal} owner={owner} />
            })
          }
        </div>
    )
}