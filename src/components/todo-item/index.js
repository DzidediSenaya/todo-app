function TodoItem({index, todo}){
return (
    <li className="list-group-item" key={index}>
        <input
            class="form-check-input me-1"
            type="checkbox"
            id={index} />
        <label
            className="form-check-label"
            for={index}
        >{todo}</label>
        {/*Take home assignment: Implement single delete*/}
        <button className="btn btn-danger">Delete</button>
    </li>
);
}

export default TodoItem;