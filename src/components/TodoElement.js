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
                <div>{atr.title}</div>
                <div className="taskButtons">
                    <button
                        onClick={() => {
                            setIsEdit(true);
                        }}
                    >
                        Edit
                    </button>
                    <button className="btnDelete" onClick={handleClick}>
                        Delete
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
                <input type="text" onChange={handleChange} value={newValue} />
                <button className="btnUpdate" onClick={handleClick}>
                    Update
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
