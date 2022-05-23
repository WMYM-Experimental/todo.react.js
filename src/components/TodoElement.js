import { useState } from "react";

const TodoElement = ({ atr, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);

    // component inside a component
    const Task = () => {
        const handleClick = (e, id) => {
            onDelete(atr.id);
        };

        return (
            <div key={atr.id} className="task">
                <div className="taskTitle">{atr.title}</div>
                <div className="taskButtons">
                    <button
                        className="btnEdit"
                        onClick={() => {
                            setIsEdit(true);
                        }}
                    >
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="btnDelete" onClick={handleClick}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        );
    };

    // component inside a component
    const Edit = () => {
        const [newValue, setNewValue] = useState(atr.title); // setting newValue to last value

        const handleSubmit = (e) => {
            e.preventDefault();
        };

        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        };

        const handleClick = (e) => {
            onUpdate(atr.id, newValue);
            setIsEdit(false);
        };

        return (
            <form className="updateForm" onSubmit={handleSubmit}>
                <input
                    className="editInput"
                    type="text"
                    onChange={handleChange}
                    value={newValue}
                />
                <button className="btnUpdate" onClick={handleClick}>
                    <span className="material-symbols-outlined">
                        trending_flat
                    </span>
                </button>
            </form>
        );
    };

    return (
        <div className="todoElements">
            {isEdit ? <Edit></Edit> : <Task></Task>}
        </div>
    );
};

export default TodoElement;
