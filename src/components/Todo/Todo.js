import React  from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Todo({todos , completeTodo , removeToDo}) {
    return todos.map((todo , index) => ( 
        <div 
        className = {todo.isCompelete ? 'todo-row complete' : 'todo-row'} 
        key={index}>

            <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
                { `${todo.id}:  ${todo.toDoName}`  }
            </div>
            <div className="icons"> 
             <FontAwesomeIcon className='mr-2 delete-icon' icon="trash" onClick={()=> removeToDo(todo.id)} />
            </div>
        </div>
     ));
}
export default Todo;