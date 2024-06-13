import React, { useEffect, useState } from 'react'
import TodoCard from '../component/TodoCard'
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
    const [todos, settodos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAllTodos()
    },[])

    const getAllTodos = async() =>{
        const res = await fetch("http://localhost:3000/todo/gettodo",{
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
        const data = await res.json()
        settodos(data.data)
    }

    const handleClick = () =>{
        navigate('/')
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center mb-8 mt-8">Todo List</h1>
            <div className="grid grid-cols-3 gap-12">
                {todos.map(todo => (
                    <TodoCard key={todo.id} todos={todo} getAllTodos={getAllTodos} />
                ))}
            </div>
            <div className="flex justify-center fixed bottom-8 left-0 right-0">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full focus:outline-none transition duration-300" onClick={handleClick}>Add More Todos</button>
            </div>
        </>
    );
}

export default TodoList
