import React from 'react';

const LifeCycleWrapper = () => {
    const [show, setShow] = React.useState(true);
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1>Wrapper</h1>

            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <LifeCycle counter={counter} setCounter={setCounter} />}
        </div>
    )
};

const LifeCycle = (props) => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        console.log(props.counter, visible);
        if (props.counter >= 10) {
            setVisible(true);
        }
    }, [props.counter]);

    React.useEffect(() => {
        console.log('Mounted');
    }, []);

    React.useEffect(() => {
        return () => {
            console.log('Unmounted');
        }
    }, []);

    return (
        <div>
            <h1>Hello: {props.counter}</h1>
            <button onClick={() => props.setCounter(props.counter + 1)}>+</button>
            {visible && (<div>More than 10</div>)}
        </div>
    );
};

export default LifeCycleWrapper;
