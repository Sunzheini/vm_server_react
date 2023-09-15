import React from 'react'

export default function MenuContainerButton(props) {
    // React Hook - useEffect
    React.useEffect(() => {
        console.log('MenuContainerButton mounted')
        }, [] // empty array means this effect will be called only once
    )

    React.useEffect(() => {
        console.log('MenuContainerButton updated')
        }, [props.selected] // this effect will be called only when props.selected changes
    )

    return (
        <button className="card-btn" onClick={
            () => {
                window.location.href = props.link;
                props.onButtonClick();
                props.onButtonSelect();
            }
        }>
            <span className="card-btn-title">
                <i className={props.icon}></i>
                {props.selected && <span>!!!</span>}
            </span>
            <span className="card-btn-desc">{props.linkText}</span>
        </button>
    )
}
