import { useState } from "react";
import Task from "./Task";

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
    };

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className="todoInput"
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
                    <Task atr={t}></Task>
                ))}
            </div>
        </div>
    );
};

export default Todo;
