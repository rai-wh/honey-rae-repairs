import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, changeSpecialties] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const empSpecialties = employees.map(employee =>
            employee.specialty)
        changeSpecialties(empSpecialties.join(", "))
    }, [employees])

    return (
        <>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            <h1>Employee List</h1>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>
                            <p><Link to={`/tickets/employee/${employee.id}`}>{employee.name}</Link></p>
                            </div>
                    }
                )
            }
        </>
    )
}