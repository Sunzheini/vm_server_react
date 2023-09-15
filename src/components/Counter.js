import React from 'react';


const getTitle = (count) => {
    return count === 0 ? 'First Blood' : 'You are a Godlike';
}

export default function Counter(props) {
    const [counter, setCounter] = React.useState(0);

    const onButtonClickIncrement = (e) => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const onButtonClickDecrement = (e) => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    const onButtonClickReset = (e) => {
        setCounter(0)
    }

    const title = getTitle(counter);

    return (
        <div>
            {/* condition for the style */}
            <h3 style={{fontSize: (counter + 1)/2 + 'em'}}>{title}: {counter}</h3>
            <button onClick={onButtonClickIncrement}>+</button>
            {/* Condition to show the button */}
            {counter < 10 && props.canReset
                ? <button onClick={onButtonClickReset}>Reset</button>
                : null
            }
            <button onClick={onButtonClickDecrement}>-</button>
        </div>
    )
}
