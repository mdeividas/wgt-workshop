import React from 'react';

const State = (props) => {
    const [counter, setCounter] = React.useState(props.counter);
    const [name, setName] = React.useState(props.name);
    const [flag, setFlag] = React.useState(props.flag);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const onToggle = () => setFlag(!flag);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <button onClick={onToggle}>Toggle form</button>

            <hr />
            {flag && (<input type="text" value={name} onChange={handleNameChange} />)}


            <input />
        </div>
    );
};

State.defaultProps = {
    name: 'Testas'
};

export default State;
