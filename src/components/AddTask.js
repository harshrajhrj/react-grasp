import { useState } from 'react'

function AddTask() {

    const [newTask, setNewTask] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleReset = () => {
        setNewTask("");
        setProgress(false);
    }

    const handleSelChange = (event) => {
        setProgress(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: newTask,
            completed: Boolean(progress)
        }
        console.log(task);
        handleReset();
    }

    return (
        <section className="AddTask">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' name='task' id='task'
                    placeholder='Task name' autoComplete='off' value={newTask} required />
                <div className='btn-list'>
                    <select onChange={handleSelChange} className='status' value={progress}>
                        <option value="false">Pending</option>
                        <option value="true">Completed</option>
                    </select>
                    <button type="submit" className="add btn">Add task</button>
                    <button type="button" onClick={handleReset} className="reset btn">Reset</button>
                </div>
            </form>
            <p>{newTask}</p>
        </section>
    )
}

export default AddTask