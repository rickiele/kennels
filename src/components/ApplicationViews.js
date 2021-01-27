import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Note that the <AnimalList> component is a child of the <AnimalProvider> component. 
                It is crucial that you wrap components that need data with the provider component that 
                exposes that data in JSX. You can wrap a component in as many providers as needed.
             */}
            
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                    {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
                    
                    <Route exact path="/animals">
                        <AnimalList />
                    </Route>

                    <Route path="/animals/create">
                        <AnimalForm />
                    </Route>
                    
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
            <Route path="/locations">
                <LocationList />
            </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/customers */}
            <CustomerProvider>
            <Route path="/customers">
                <CustomerList />
            </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/employees */}
            <EmployeeProvider>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            </EmployeeProvider>

        </>
    )
}