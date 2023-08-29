export default function MenuContainer() {
    return (
        <div className="menu-container">
            <ul className="ul-menu-list" role="list">
                <button className="card-btn" onClick="#">
                <span className="card-btn-title">
                    <i className="fa-solid fa-angles-left"></i></span>
                    <span className="card-btn-desc">Back</span>
                </button>
                <button className="card-btn" onClick="#">
                <span className="card-btn-title">
                    <i className="fa-solid fa-landmark-flag"></i></span>
                    <span className="card-btn-desc">Test</span>
                </button>
            </ul>
        </div>
    )
}
