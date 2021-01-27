import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { EmployeeCard } from "./EmployeeCard"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getEmployees()
    .then(getLocations)
  }, [])

  const history = useHistory()

  return (
    <div className="employees">

        <h2>Employees</h2>

            {
              employees.map(employee => {
                const clinic = locations.find(c => c.id === employee.locationId)
                
                return <EmployeeCard key={employee.id} 
                  employee={employee} 
                  location={clinic} />
              })
            }

        <button onClick={() => {history.push("/employees/create")}}>
          Add Employee
        </button>

      </div>
  )
}