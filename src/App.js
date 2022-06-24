import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete= (todo)=>{
    //console.log("I am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
      }
    ))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    //console.log("I am adding this Todo",title,desc)
    let sno;
    if(todos.length===0)
    {
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  /*return (
    <>
    <Router>
      <Header title="My Todos List" searchbar={false}/>
      <Routes>
          <Route exact path="/" render={()=>{
            return (
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );*/
  return (
    <>
      <Router>
        <Header title="To Do List" searchbar={false}/>
        <Routes>
          <Route exact path="/" element = {
              <>
                < AddTodo addTodo = {addTodo} />
                < Todos todos = {todos} onDelete = {onDelete} />
              </>
          }>
          </Route>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
