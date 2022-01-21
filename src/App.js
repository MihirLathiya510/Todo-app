import React, { useState, useEffect } from "react";
import "./App.css";

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState();
  // effecs used only once
  useEffect(()=>{
    getFromLocalStorage();
  },[]);
  // effecs 
  useEffect(()=>{
    filterHandler();
    saveToLocalStorage();
  },[todos,status]);
  // functions
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  }
  const saveToLocalStorage = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getFromLocalStorage = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }
  return (
    <div className="App">
      <header>
        <h2> Todo </h2>
      </header>
      <Form
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList filteredTodos = {filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
