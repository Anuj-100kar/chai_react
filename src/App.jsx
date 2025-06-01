import { useState } from 'react'
import './App.css'
import InputTodo from './InputTodo'
import TodoItem from './TodoItem'

function App() {

  const [todo,setTodo]=useState([])

  const addtodo=(input)=>{
    if(input!=='')
    setTodo([...todo,input])
  }

  const deletetodo=(key)=>{
    let newtodo=[...todo]
    newtodo.splice(key,1)
    setTodo([...newtodo])
  }

  return (
    <div className='w-full h-screen bg-green-200 text-black-500 flex justify-center pt-20 '>
      <div className='center-container'>
    <InputTodo addtodo={addtodo}/>
    <h1 className='app-heading'>Todo </h1>
    <hr/>
    {todo.map((items,i)=>{
      return (
          <TodoItem key={i} index={i} item={items} deleteitem={deletetodo}/>
      );
    })}
    </div>
    </div>
  )
}

export default App
