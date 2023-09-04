import React from 'react';

export default function Counter(props) {
    const [counter, setCounter] = React.useState(0);
    const [title, setTitle] = React.useState('First Blood');

    const onButtonClickIncrement = (e) => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const onButtonClickDecrement = (e) => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    const onButtonClickReset = (e) => {
        setCounter(0)
    }

    return (
        <div>
            <h1>{title}</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={onButtonClickIncrement}>+</button>
            <button onClick={onButtonClickReset}>Reset</button>
            <button onClick={onButtonClickDecrement}>-</button>
        </div>
    )
}
