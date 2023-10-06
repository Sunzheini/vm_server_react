import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";
import {routes} from "../../routes/routesList";


const navItems = [
        {
            // always have id to use on keys
            id: 0,
            link: <Link to={routes.home}><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link>,
        },
        {
            id: 1,
            link: <Link to={routes.login}><i className="fa-solid fa-arrow-right-to-bracket"></i>&nbsp;&nbsp;Login</Link>,
        },
        {
            id: 2,
            link: <Link to={routes.users}><i className="fa-solid fa-user-pen"></i>&nbsp;&nbsp;Users</Link>,
        },
        {
            id: 3,
            link: <Link to={routes.vms}><i className="fa-solid fa-laptop-code"></i>&nbsp;&nbsp;VMs</Link>,
        }
    ]

export default function Header() {
    return (
        <header className="header">
            <Navigation navItems={navItems}/>
        </header>
    )
}
