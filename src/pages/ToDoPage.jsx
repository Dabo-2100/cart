import { useRef } from "react";
import { useState } from "react";
export default function ToDoPage() {
    const tName = useRef();
    const tDesc = useRef();
    const editedTaskName = useRef();
    const editedTaseDesc = useRef();

    const [tasks, setTasks] = useState([
        { id: 1, name: "task 1", desc: "Go To Work" },
        { id: 2, name: "task 2", desc: "Go To Sleep" },
        { id: 3, name: "task 3", desc: "Go To Gym" },
    ]);
    const [taskToEdit, setTaskToEdit] = useState();
    const [newTask, setNewTask] = useState();
    const [newTaskDesc, setNewTaskDesc] = useState();

    function addNewTaskToArr(event) {
        event.preventDefault();
        let oldTasks = [...tasks];
        let taskObj = {
            id: tasks.length + 1,
            name: newTask,
            desc: newTaskDesc,
        }
        oldTasks.push(taskObj);
        setTasks(oldTasks);
        tName.current.value = "";
        tDesc.current.value = "";
    }

    function removeTask(task_id) {
        let oldTasks = [...tasks];
        let task_index = oldTasks.findIndex((el) => { return el.id == task_id });
        oldTasks.splice(task_index, 1);
        setTasks(oldTasks);
    }

    function saveTaskUpdate(task_id) {
        let oldTasks = [...tasks];
        let task_index = oldTasks.findIndex((el) => { return el.id == task_id });
        oldTasks[task_index].name = editedTaskName.current.innerText;
        oldTasks[task_index].desc = editedTaseDesc.current.innerText;
        setTasks(oldTasks);
        setTaskToEdit(undefined);
    }
    return (
        <div className="col-12 ">
            <form className="col-12" onSubmit={(e) => { addNewTaskToArr(e) }}>
                <input ref={tName} className="form-control" onKeyUp={(e) => { setNewTask(e.target.value) }} type="text" placeholder="Enter New Task Name" />
                <input ref={tDesc} className="form-control" onKeyUp={(e) => { setNewTaskDesc(e.target.value) }} type="text" placeholder="Enter New Task Desc" />
                <button className="btn btn-success">Add</button>
            </form>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>Task Name</th>
                        <th>Task Desc</th>
                        <th>Remove</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((el, index) => {
                            return (
                                <tr key={el.id}>
                                    <th >{index + 1}</th>
                                    <th ref={index == taskToEdit ? editedTaskName : null} contentEditable={index == taskToEdit ? true : false}>{el.name}</th>
                                    <th ref={index == taskToEdit ? editedTaseDesc : null} contentEditable={index == taskToEdit ? true : false}>{el.desc}</th>
                                    <th><button className="btn btn-danger" onClick={() => { removeTask(el.id) }}>Remove</button></th>
                                    <th><button className="btn btn-warning" onClick={() => {
                                        index == taskToEdit ? saveTaskUpdate(el.id) :
                                            setTaskToEdit(index)
                                    }}>{index == taskToEdit ? "Save" : "Edit"}</button></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}
