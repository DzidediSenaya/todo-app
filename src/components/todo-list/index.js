import { useLocalStorage } from "usehooks-ts";
import stlyes from "./index.module.css"
import TodoItem from "../todo-item"

function Todolist() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    return (
        <section>
            <button
                className="btn btn-danger"
                onClick={() => setTodos([])}
            >Clear Todos</button>
            <ul className="list-group">
                {todos.map(function(todo, index){
                    return <TodoItem todo={todo} index={index} />; 
                })}
            </ul>
        </section>
    )
}
export default Todolist;