import React from 'react';
import Form from './form/form';
import Item from './item/item';
import './todo-app.css';

const initialTodos = [
    { title: 'Make a dinner', checked: false, id: new Date().getTime() },
    { title: 'Make a presentation', checked: true, id: new Date().getTime() + 1 },
];

const TodoApp = () => {
    const [todos, setTodos] = React.useState(initialTodos);

    const handleToggle = (id) => {
        setTodos(todos.map((todo) => ({
            ...todo,
            checked: todo.id === id ? !todo.checked : todo.checked,
        })))
    };

    const editTodo = (id, title) => {
        setTodos(todos.map((todo) => ({
            ...todo,
            title: todo.id === id ? title : todo.title,
        })));
    };

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                title,
                id: new Date().getTime(),
                checked: false,
            }
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>Todo app</h1>
            {todos.map((todo) => (
                <Item
                    key={todo.id}
                    id={todo.id}
                    checked={todo.checked}
                    title={todo.title}
                    handleToggle={handleToggle}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
            <hr />
            <Form onSubmit={addTodo} />
        </div>
    )
};

export default TodoApp;
