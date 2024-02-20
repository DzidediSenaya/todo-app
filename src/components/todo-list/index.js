import { useLocalStorage } from "usehooks-ts";
import stlyes from "./index.module.css"
import TodoItem from "../todo-item"

function Todolist() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    return (
        <ul className="list-group">
            {todos.map((todo, index) => <TodoItem todo={todo} index={index} />
            )}
        </ul>
    );
    }
export default Todolist;