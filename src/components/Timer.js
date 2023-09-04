import React from 'react'

export default function Timer(props) {

    // React Hook
    // -------------------------------------------------------
    const [
        seconds,        // stateResult[0] = state value
        setSeconds      // stateResult[1] = function to update state value
    ] = React.useState(props.start);

    setTimeout(() => {
        setSeconds(
            // setSeconds(seconds + 1) // this way can be a problem
            (oldSeconds) => oldSeconds + 1 //use this way instead
        );
    }, 1000)
    // -------------------------------------------------------

    return (
        <div>
            You've been here for {seconds} seconds
        </div>
    )
}
