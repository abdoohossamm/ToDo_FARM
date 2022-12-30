import React, { useState, useEffect} from 'react';
import axios from 'axios';
import TodoListView from "./TodoListView";

function Main(){
    const [todoList, setTodoList] = useState([{}])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // Read all todos
    useEffect( () => {
        setTimeout(()=> axios.get('/api/v1/todo')
            .then(res => {
                setTodoList(res.data)

            }).catch(error => console.log(error)),
            30
        )

    });

    const addTodoHandler = () => {
        axios.post('/api/v1/todo/', { 'title': title, 'description': desc })
            .then(res => console.log(res))
    };
    return (
        <div className="min-h-screen text-center justify-center items-center items-center mx-auto pt-10">
            <h1 className="card text-gray-800 dark:text-white bg-cyan-400 dark:bg-cyan-800 mb-1 text-3xl">ToDo App</h1>
            <h6 className="card bg-cyan-300 dark:text-white dark:bg-cyan-700 text-gray-800 mb-3">FASTAPI - React - MongoDB</h6>
            <div className="card-body">
                <h5 className="card bg-cyan-800 text-white bg-dark mb-3">Add New Task</h5>
                <span className="contact-form">
                        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>
                        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
                        <button className="form-submit-btn"  onClick={addTodoHandler}>Add Task</button>
                    </span>
            </div>
            <div className="card-body">
                <h5 className="card bg-cyan-800 text-white bg-dark mb-3">Your Tasks</h5>
                <TodoListView todoList={todoList} />
            </div>
        </div>
    );
}

export default Main;