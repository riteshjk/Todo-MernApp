import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TodoCard = ({ todos, getAllTodos }) => {
    const [showModal, setShowModal] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState({
        title: todos.title,
        description: todos.description
    });

    const navigate = useNavigate()

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/todo/deleteTodo/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            getAllTodos();
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (id) => {
        setShowModal(true);
    }

    const handleChange = (e) => {
        setUpdatedTodo({
            ...updatedTodo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
      
 
                const res = await fetch(`http://localhost:3000/todo/createTodo`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(todos)
                });
                getAllTodos();
                setShowModal(false);
            
           
        
    }

    const handleItemUpdate = async (e)=>{

        e.preventDefault()
        
        try {
            if (todos._id) {
                const response = await axios.patch(
                    `http://localhost:3000/todo/updateTodo/${todos._id}`,
                    updatedTodo
                );
                getAllTodos();
                setShowModal(false);
                console.log('Todo updated successfully:', response.data);
            } else {
                throw new Error('Todo ID not found');
            }
        } catch (error) {
            console.error('Error updating todo:', error.message);
        }
    }

    const handleClick = () =>{

        navigate(`/tododetails/${todos._id}`)
        
    }
    
    return (
        <div  className="w-full h-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="p-6" onClick={handleClick}>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{todos.title}</h2>
            </div>
            <div className="flex justify-between p-4 bg-gray-100">
                <button onClick={() => handleUpdate(todos._id)} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Update
                </button>
                <button onClick={() => handleDelete(todos._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Delete
                </button>
            </div>

            <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} className="Modal">
                <form onSubmit={(e)=> handleItemUpdate(e)} className="p-6 bg-white rounded-lg shadow-md">
                    <input type="text" name="title" value={updatedTodo.title} onChange={handleChange} className="border border-gray-300 rounded w-full px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
                    <textarea name="description" value={updatedTodo.description} onChange={handleChange} className="border border-gray-300 rounded w-full px-4 py-2 mb-2 focus:outline-none focus:border-blue-500 resize-none" rows="4"></textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none transition duration-300">Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default TodoCard;
