function TodoItem({index, todo}){
return (
    <li className="list-group-item" key={index}>
        <input
            class="form-check-input"
            type="checkbox"
            id={index} />
        <label
            className="form-check-label"
            for={index}
        >{todo}</label>
    </li>
);
}

export default TodoItem;