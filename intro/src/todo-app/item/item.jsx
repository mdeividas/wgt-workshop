import React from 'react';
import Button from './../button/button';
import Form from './../form/form';
import './item.css';

const Item = (props) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const className = props.checked ? 'item checked' : 'item';

    const onToggle = () => {
        props.handleToggle(props.id);
    };

    const onClickDelete = () => {
        if (window.confirm('Are you sure?')) {
            props.deleteTodo(props.id);
        }
    };

    const onEditTodo = (title) => {
        props.editTodo(props.id, title);
        cancelEdit();
    };

    const cancelEdit = () => {
        setIsEdit(false);
    };

    const startEdit = () => {
        setIsEdit(true);
    };

    const renderContent = () => {
        if (isEdit) {
            return (
                <React.Fragment>
                    <div className="content">
                        <Form title={props.title} onSubmit={onEditTodo} />
                    </div>
                    <div className="actions">
                        <Button onClick={cancelEdit}>Cancel</Button>
                    </div>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <div className="content">
                    <input type="checkbox" checked={props.checked} onChange={onToggle} />
                    {props.title}
                </div>
                <div className="actions">
                    <Button onClick={startEdit}>Edit</Button>
                    <Button onClick={onClickDelete}>Delete</Button>
                </div>
            </React.Fragment>
        )
    };

    return (
        <div className={className}>
            {renderContent()}
        </div>
    );
};

export default Item;
