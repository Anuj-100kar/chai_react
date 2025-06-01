import React from 'react'
import { useState } from 'react';

function InputTodo(props) {
    const [input ,setInput]=useState("")

    const handlepress=(e)=>{
      if(e.keyCode===13){
      props.addtodo(input)
      setInput("")
    }
     
    }
  return (
    <div className='flex gap-3'>
    
          <input  
          className='h-10 py-3 px-4 rounded-l border border-green-500 hover:border-white hover:border-4'
          type="text" 
          placeholder='enter your task...'
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
          onKeyDown={handlepress}
          />
          <button className='bg-pink-400 hover:bg-orange-400 border border-orange-500 hover:border-pink-500
          text-white hover:text-black font-bold flex items-center
          rounded-xl px-3 py-3 h-10 font-bold' onClick={
            ()=>{
                props.addtodo(input);
                setInput("")
            }
          }>add</button>
      </div>
  
  )
}

export default InputTodo
