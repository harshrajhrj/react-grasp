function TaskCard({ task, handleDelete }) {
    return (
        <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
            <span>
                {task.id} - {task.name}
            </span>

            <button className="btn reset" onClick={() => handleDelete(task.id)}>
                Delete
            </button>
        </li>
    )
}

export default TaskCard;