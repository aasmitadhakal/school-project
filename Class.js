import React from 'react'
import {useState } from "react/cjs/react.development"

function Class() {
    const[inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:"",
      });
      const{name,email,password,confirm_password}=inputs;
       console.log(inputs);
       const [errors,setErrors]=useState({});
       const SubmitHandler=(e)=>{
           e.preventDefault();
           const{name,email,password,confirm_password}=inputs;
           if(name===""){
               setErrors({name:"name is required"});
           }else if(email===""){
            setErrors({email:"email is required"});
        }else if(password===""){
            setErrors({password:"password is required"});
        }else if(confirm_password!=password){
            setErrors({confirm_password:"password doesnt match"});
        }else{
            setErrors({});
            alert("sucess");
        }
       };
    return (
        <div>
            <center>
                <form 
                style={{
                    display:'flex',
                    flexDirection:"column",
                    gap:"0.3",
                }}
                onSubmit={SubmitHandler}>
                <input
    type="text"
    name="name"
    value={name}
    placeholder="enter name"
    onChange={(e)=>{
      setInputs({...inputs,name:e.target.value});
    }}></input>
    <span>{errors.name}</span>
    <input
    type="text"
    name="name"
    value={email}
    placeholder="enter email"
    onChange={(e)=>{
      setInputs({...inputs,email:e.target.value});
    }}
></input>
<span>{errors.email}</span>
<input
    type="password"
    name="password"
    value={password}
    placeholder="enter Password"
    onChange={(e)=>{
      setInputs({...inputs,password:e.target.value});
    }}
></input>
<span>{errors.password}</span>
<input
    type="password"
    name="password"
    value={confirm_password}
    placeholder="enter confirm_password"
    onChange={(e)=>{
      setInputs({...inputs,confirm_password:e.target.value});
    }}
></input>
<span>{errors.confirm_password}</span>
<button>submit</button>
                </form>
               
            </center>
        </div>
    )
}

export default Class




