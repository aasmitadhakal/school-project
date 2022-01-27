import React from 'react';
import { useState } from 'react';

function Button() {
    const [count,setCount]= useState(100)
    const [toggle,setToggle]=useState(false)
    const [theme,setTheme]=useState('blue')
    function decrementCount(){
        setCount(prevCount => prevCount-1)
        setCount(prevCount => prevCount-1)
        setTheme('yellow')
    }
    function incrementCount(){
        setCount(count+1)
        setTheme('red')
    }
    function changeName(){
        setToggle(!toggle)
        setTheme('gray')
    }
    
    return (
        <>
       <button onClick ={changeName}>bottom{toggle ? "rita":"asmita"}</button>
       {toggle ? "bibek":"hlo"}
        <h1>hello beautiful</h1>
        <button onClick ={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}

export default Button;
