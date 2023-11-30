import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";
import {routes} from "../../routes/routesList";

import {CustomContext} from "../../contexts/CustomContext";
import {useContext} from "react";


const navItemsRegular = [
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
            link: <Link to={routes.vms}><i className="fa-solid fa-laptop-code"></i>&nbsp;&nbsp;VMs</Link>,
        },
        {
                id: 3,
                link: <Link to={routes.pyscripts}><i className="fa-solid fa-scroll"></i>&nbsp;&nbsp;Scripts</Link>,
        }
    ]

const navItemsLoggedIn = [
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
        },
        {
            id: 4,
            link: <Link to={routes.pyscripts}><i className="fa-solid fa-scroll"></i>&nbsp;&nbsp;Scripts</Link>,
        }
    ]

export default function Header() {
    const {result, isAuthenticated} = useContext(CustomContext);

    return (
        <header className="header">
            {/* show only if auth */}
            {isAuthenticated && result.is_admin && <Navigation navItems={navItemsLoggedIn}/>}

            {/* show only if auth but not admin */}
            {isAuthenticated && !result.is_admin && <Navigation navItems={navItemsRegular}/>}

            {/* show only if not auth */}
            {!isAuthenticated && <Navigation navItems={navItemsRegular}/>}
        </header>
    )
}
