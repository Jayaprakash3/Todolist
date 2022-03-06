import React from 'react';
import './App.css'
import Todolist from './Todolist/Todolist';
const TodoApp = () =>{
  let dateObj=new Date();
  let  days = ["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
  let months=["jan","Feb","Mar","Apr","May","Jun","jul","Aug","oct","sep","nov","dec"];
 let date = dateObj.getDate();
 let month=months[dateObj.getMonth()];
  let day=days[dateObj.getDay()]; 
  return(
    <div className="Todo-App">
    <h1>    Today<span>{day} {date} {month}</span></h1>
    <Todolist/>
    </div>  );
}

export default TodoApp;