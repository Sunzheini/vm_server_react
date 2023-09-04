export default function Navigation(props) {
    return (
        <nav className="nav-navigation">
            <ul className="ul-nav-list" role="list">
                <li className="li-nav-item">
                    <a href={props.navItems[0].link}>
                        <i className={props.navItems[0].icon}></i>
                        &nbsp;&nbsp;
                        {props.navItems[0].linkText}
                    </a>
                </li>
                <li className="li-nav-item">
                    <a href={props.navItems[0].link}>
                        <i className={props.navItems[1].icon}></i>
                        &nbsp;&nbsp;
                        {props.navItems[1].linkText}
                    </a>
                </li>
            </ul>
        </nav>
    )
}
