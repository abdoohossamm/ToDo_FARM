import axios from 'axios'
import React from 'react'
import { MdClose } from "react-icons/md";

function TodoItem(props: {
    todo: {
        title: string | null | undefined;
        description: string | null | undefined
    } }
    ) {
    const deleteTodoHandler = (title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
        axios.delete(`/api/v1/todo/${title}`)
            .then(res => console.log(res.data)) }

    return (
        <div className={"w-full"}>
            <span className={"font-bold text-xl"}>{props.todo.title} : </span> <span className={"text-lg"}>{props.todo.description}</span>
            <button
                onClick={() => deleteTodoHandler(props.todo.title)}
                className="p-1 rounded-full hover:bg-red-500 border-red-500 dark:hover:bg-red-800 dark:border-red-900 border-2 my-2 mx-2"
            >
                <MdClose size={20} />
            </button>

        </div>

    )
}

export default TodoItem;