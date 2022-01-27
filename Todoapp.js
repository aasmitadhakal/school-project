import React from 'react'
import { useState } from 'react/cjs/react.development'
import './index.css';

function Todoapp() {
   const [todoVal,setTodoVal]=useState("");
   const [todoErr,setTodoErr]=useState("");
   const [todos,setTodos]=useState([]);
   const AddTodo = (e)=>{
       e.prventDefault();
       if(todoVal ==""){
           setTodoErr("please enter todo");
       }else{
           setTodoErr("");
           let  obj ={
               id: todos.length == 0 ? 1: todos[todos.length-1].id+1,
               name :todoVal,
           };
           setTodos([...todos,obj]);
           setTodoVal("");
       }
   };
   const deleteFromTodo =(id)=>{
       const filteredArry = todos.filter((data)=>data.id!==id );
       setTodos(filteredArry);
   };
    return (
        <div class=" w-full flex flex-col justify-center items-center  gap-1">
            <h1 >Simple Todo App</h1>
      
            <form 
            onSubmit={AddTodo}
            class="flex gap-1"
            >
                <input type="text"
                name ="inputVal"
                value ={todoVal}
                onChange = {(e)=>
                setTodoVal(e.target.value)}
                placeholder="enter todo.."
                className=""
                />
                <buttton class="w-24">Add Todo</buttton>
                <span>{todoErr}</span>
                
            </form>
            <div class="flex flex-col gap-0.5">
                {todos.map((data,index)=>{
                    const {id,name}=data;
                    return(
                        <div key={index}
                        class="w-100 bg-red-400 text-white p-3 flex justify-between text-xs">
                            <span>{name}</span>
                            <span onClick ={
                                ()=>deleteFromTodo(id)}
>X</span></div>
                            
                    );
                })}
            </div>
        </div>
    );
}

export default Todoapp;
