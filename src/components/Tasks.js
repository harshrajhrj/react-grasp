import { useState } from "react";
import TaskCard from "./TaskCard";

function Tasks() {

    const [tasks, setTasks] = useState([
        { id: 5271, name: "ReactJS", completed: true },
        { id: 5272, name: "NextJS", completed: false },
        { id: 5273, name: "ElectronJS", completed: false }
    ])

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(t => t.id != id));
    }

    return (
        <section className="Task">
            <div className="Header">
                <h1>Task name</h1>
                <div>
                    <button className="btn" onClick={() => setShow(!show)}>{show ? "Hide tasks" : "Show tasks"}</button>
                </div>
            </div>
            <ul>
                {
                    show
                    &&
                    tasks.map((t) => (
                        <TaskCard key={t.id} task={t} handleDelete={handleDelete} />
                    ))
                }
            </ul>
        </section>
    )
}

export default Tasks;