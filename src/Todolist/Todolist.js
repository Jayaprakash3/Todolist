import React from 'react';
import Addtask from'../Addtask/Addtask';
import Todo from'../Todo/Todo';
const Todolist= () =>{
    const [todos,setTodos]=React.useState([]);
    const Addtodo = todo =>{
        if(!todo.text){
            return;
        }
const newtodo=[...todos,todo];
console.log(newtodo);
setTodos(newtodo);


    }
   function isComplete(index) {
        const updatelist = [...todos];
        updatelist = [index].isComplete =
            !updatelist[index].isComplete;
        console.log(updatelist);
        setTodos(updatelist);
    }
    const remove=index=>{
        const filterarr=[...todos];
        filterarr.splice(index,1);
        setTodos(filterarr);

    }
    return(
        <div className="Todo-List">
        <Addtask submit= {Addtodo} />   
        <Todo todo={todos} isComplete={isComplete} remove={remove}/>     </div>
    );
}

export default Todolist;