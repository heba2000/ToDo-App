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
                {/* <FontAwesomeIcon className='mr-2' icon="edit" 
                onClick={()=> setEdit({id:todo.id , value:todo.value})}
                className = 'edit-icon'
                /> */}
                <FontAwesomeIcon className='mr-2' icon="trash" 
                onClick={()=> removeToDo(todo.id)}
                className = 'delete-icon'
                />
            </div>
        </div>
     ));
}
export default Todo;