import React from "react";


const Form = ({setInputText , inputText , setTodos , todos, setStatus}) => {
    const inputTextHandler = (e) => {
      // console.log(e.target.value)
        setInputText(e.target.value); 
    }
    const submitFormHandler = (e) => {
      e.preventDefault();
      if(e.target.value){
        setTodos([
          ...todos, {text: inputText , completed: false, id: Math.random()*1000 }
        ]);
        setInputText("");
      }else {
        alert('input should not be blank!!');
      }
      
    }
    const statusHandler = (e) => {
      setStatus(e.target.value);
    }
    return (
        <form>
        <input value = { inputText } onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={ submitFormHandler }  className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;