import React from "react";
import styles from "./index.module.css";

function CreateTodo() {

    let todo;

    function collectInput(event) {
        todo = event.target.value;
    }


    function saveTodo() {
        //Get existing list of todos from local storage
        let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || []; //use or operator in place of if,else 
        //Add new todo to existing list of todos
        todos.push(todo);//push adds new item to the list/stack
        //Set all todos in local storage
        localStorage.setItem("TODO_KEY", JSON.stringify(todos))
        

    }
    return (
        <section className={styles.createTodoSection}>
            <input
                onChange={collectInput}
                className={styles.createTodoInput}
                placeholder="start typing..." />
            <button onClick={saveTodo}>Create</button>
        </section>
    );

}

export default CreateTodo;