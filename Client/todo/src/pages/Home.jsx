import React, { useState } from 'react'
// import TodoCard from '../component/TodoCard'
import AddTodo from '../component/AddTodo';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [todoData, setTodoData ] = useState({
        title: "",
        description: "",
        status: false
    });

    const navigate = useNavigate();
    const handleSubmit = async(e) => {

       const {title, description} = todoData
    
        e.preventDefault();
        const res = await fetch("http://localhost:3000/todo/createtodo",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({title,description})
        })
        setTodoData({ title: "", description: "", status: false });
        navigate("/todos");
      };


      const handleChnage = (e) =>{
        setTodoData({...todoData, [e.target.name]: e.target.value})
      }

  return (
    <div>
      <p>Todo</p>
      <AddTodo onChange = {handleChnage} todoData={todoData} handleSubmit={handleSubmit}/>
      {/* <TodoCard/> */}
    </div>
  )
}

export default Home