import { useState } from "react";
import TodoElement from "./TodoElement";

const Todo = () => {
    //using hooks
    // "get and set"
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            finished: false,
        };
        const aux = [...todos];
        aux.push(newTask);
        setTodos(aux);
        setTitle("");
    };

    const handleUpdate = (id, value) => {
        const aux = [...todos];
        const target = aux.find((t) => t.id === id);
        target.title = value;
        setTodos(aux);
    };

    const handleDelete = (id) => {
        const aux = todos.filter((t) => t.id !== id);
        setTodos(aux);
    };

    return (
        <div className="todoContainer">
            <form className="createForm" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className="createInput"
                    value={title}
                />
                <input
                    onClick={handleSubmit}
                    value="Create"
                    type="submit"
                    className="btnCreate"
                />
            </form>

            <div className="todos">
                {todos.map((t) => (
                    <TodoElement
                        atr={t}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    ></TodoElement>
                ))}
            </div>
        </div>
    );
};

export default Todo;
