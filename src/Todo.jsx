import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

export default function Todo() {
    let [todo, setTodo] = useState([{ task: "tasks", id: uuidv4(), completed: false }]);
    let [newtodo, setNewtodo] = useState("");

    let update = (event) => {
        setNewtodo(event.target.value);
    };

    let btn = () => {
        setTodo([...todo, { task: newtodo, id: uuidv4(), completed: false }]);
        setNewtodo("");
    };

    let uppercase = () => {
        setTodo((todo) => 
            todo.map((item) => ({
                ...item,
                task: item.task.toUpperCase()
            }))
        );
    };

    let toggleComplete = (id) => {
        setTodo(todo.map((item) => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    let dt = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1>To Do list</h1>
            <input placeholder="add a task" value={newtodo} onChange={update}></input>
            <br></br><br></br>
            <button onClick={btn}>Add task</button>
            <br></br><br></br><br></br><br></br>
            <hr></hr>
            <h4>Tasks to do</h4>
            <ul>
                {todo.map((item) => (
                    <div key={item.id}>
                        <li>
                            <span className={item.completed ? "completed" : ""}>{item.task}</span>
                            <button onClick={() => dt(item.id)}>Delete</button>
                            <button onClick={() => toggleComplete(item.id)}>Mark as Done</button>
                        </li>
                    </div>
                ))}
            </ul>
            <button onClick={uppercase}>Uppercase All</button>
        </div>
    );
}
