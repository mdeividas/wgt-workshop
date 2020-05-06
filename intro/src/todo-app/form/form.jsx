import React from 'react';
import Button from './../button/button';
import './form.css'

const Form = (props) => {
    const [title, setTitle] = React.useState(props.title);

    const onClickSubmit = () => {
        if (!!title) {
            props.onSubmit(title);
            setTitle('');
        } else {
            window.alert('Title is required');
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="form">
            <input value={title} onChange={handleTitleChange} />
            <Button onClick={onClickSubmit}>Submit!</Button>
        </div>
    )
};

Form.defaultProps = {
    title: '',
};

export default Form;
