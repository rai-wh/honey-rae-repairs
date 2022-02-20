import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer.")
            }
            else {
                updateMessage(`You have ${customers.length} customers.`)
            }
        },
        [customers]
    )

    return (
        <>
            <h1>Customer List</h1>
            <h2>{totalCustomerMessage}</h2>
            <h4>Your first five customers are:</h4>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}