import React from 'react'
import NavigationItem from "./NavigationItem";


export default function Navigation({navItems}) {
    // mapping
    let elementsList = navItems.map((navItem) => {
        return <NavigationItem key={navItem.id} {...navItem}/>
    })

    return (
        <nav className="nav-navigation">
            <ul className="ul-nav-list" role="list">
                {elementsList}
            </ul>
        </nav>
    )
}
