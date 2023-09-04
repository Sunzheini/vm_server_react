export default function MenuContainer(props) {
    return (
        <div className="menu-container">
            <ul className="ul-menu-list" role="list">
                <button className="card-btn" onClick={props.links[0]}>
                <span className="card-btn-title">
                    <i className={props.icons[0]}></i></span>
                    <span className="card-btn-desc">{props.linkText[0]}</span>
                </button>
                <button className="card-btn" onClick={props.links[1]}>
                <span className="card-btn-title">
                    <i className={props.icons[1]}></i></span>
                    <span className="card-btn-desc">{props.linkText[1]}</span>
                </button>
            </ul>
        </div>
    )
}
