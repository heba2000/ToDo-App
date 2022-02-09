import React, { useState } from "react";
import ToDoForm from "../TodoForm/todoForm";
import Todo from "../Todo/Todo";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    
    const addToDo = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompelete = !todo.isCompelete
                console.log("complete todo change")
            }
            console.log(todo.isCompelete)
            return todo;
            
        });
      
        setTodos(updatedTodos);
    }

    const removeToDo = id => {
        const removedArr = [...todos.filter(todo => todo.id !== id)]
        setTodos(removedArr)
    };

    // const updateTodo = (todoID , todoValue ) => {
    //     setTodos (prev => prev.map (item => (item.id === todoID ? todoValue : item )))
    // }

    return (
        <div className="container">
            <ToDoForm onSubmit={addToDo} />
            <Todo
                todos = {todos}
                completeTodo = {completeTodo}
                removeToDo = {removeToDo}
            />
        </div>
    )
}

export default ToDoList;