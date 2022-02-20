import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, setEmployee] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(setEmployee)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="employee">
                <h1>Employee</h1>
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}
