import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Ticket } from "./serviceTickets/Ticket"
import { Employee } from "./employees/Employee"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
             </Route>
             <Route exact path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets/employee/:employeeId(\d+)">
                <Employee />
            </Route>
        </>
    )
}