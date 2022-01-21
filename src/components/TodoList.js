import React from "react";

// component area
import Todo from './todo';

const TodoList = ( {todos, setTodos , filteredTodos} ) => {
    if (todos.length === 0 ) {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                  
                </ul>
            </div>
        )
    }else {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <Todo setTodos = {setTodos} todos = {todos} text={todo.text} todo ={todo}/>
                        // console.log(todo);
                    ))}
                </ul>
            </div>
        );
    }
    
}

export default TodoList;