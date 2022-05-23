const Task = ({ atr }) => {
    return <div key={atr.id}>{atr.title}</div>;
};

export default Task;
