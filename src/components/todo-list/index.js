import { useLocalStorage } from "usehooks-ts";

function Todolist() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    return (
        <ul>
            {todos.map(function (todo, index) {
            return <li key={index}>{todo}</li>
            })}
        </ul>
    )
}

export default Todolist;