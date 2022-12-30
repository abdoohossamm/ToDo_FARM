import TodoItem from './TodoItem'

function TodoListView(props: { todoList: any[] }) {
    return (
        <div className={"[&>div]:border-b-2 border-gray-800"}>
            {props.todoList.map(
                (todo) =>
                    <TodoItem todo={todo} key={todo.name}/>
                )}
        </div>
    )
}
export default TodoListView;