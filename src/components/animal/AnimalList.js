/* "useContext" and "useEffect" are called hooks
   "useContext" hook allows you to use data structures and functions that a parent provider component exposes.
   "useEffect" hook allows the component to reach out into the world for anything that cannot be handled during render. 
 */
import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

/* "useContext" here allows you to access the data from AnimalContext, LocationContext, CustomerContext */
export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    
    /* "useEffect" is like an event listener. It listens for a change in the state
       There are two arguments: Function and an array */
    useEffect(() => {
      console.log("AnimalList: useEffect - getAnimals")
      getCustomers()
      .then(getLocations)
      .then(getAnimals)
      /* Empty array below is called a Dependency Array. 
      Logic within functions only occur when a function is invoked. 
      Within a React component, useEffect is a function. After the return, useEffect is automatically 
      invoked and since the dependency array is empty, it only runs the first time the component renders.
      */
    }, [])
  
   /* The useHistory hook let's us tell React which route we want to visit. 
      We will use it to tell React to render the animal form component. */
    const history = useHistory()

    /* The .map() array method is used to iterate the array of animals 
    and generate HTML for each one by invoking the AnimalCard component function. */

    /* the key, animal, owner, and location arguments are propeties on an object 
       that gets passed in as an argument  */
    return (
        <div className="animals">
          <h2>Animals</h2>
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
          {
            animals.map(animal => {
              const owner = customers.find(c => c.id === animal.customerId)
              const clinic = locations.find(c => c.id === animal.locationId)
              return <AnimalCard key={animal.id} 
                animal={animal} 
                owner={owner} 
                location={clinic} />
            })
          }
        </div>
    )
}