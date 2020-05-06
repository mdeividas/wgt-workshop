import React from 'react';

const Props = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {!!props.name && (<p>{`Hello, ${props.name}!`}</p>)}
            {!!props.children && (
                <div style={{backgroundColor: 'skyblue', padding: 15}}>{props.children}</div>
            )}
        </div>
    );
};

Props.defaultProps = {
    title: "Default title"
};

export default Props;
