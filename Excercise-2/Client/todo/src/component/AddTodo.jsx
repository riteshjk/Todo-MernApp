import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = ({ onChange, todoData, handleSubmit }) => {
    const navigate = useNavigate();
  const handleChange = (e) => {
    onChange(e);
  };

  const handleViewAllTodos = () => {
    navigate('/todos');
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <form className="w-1/2 bg-white rounded shadow-lg p-6 mb-8" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={todoData?.title}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full px-4 py-3 mb-4 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Add Description"
          name="description"
          value={todoData?.description}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full px-4 py-3 mb-4 focus:outline-none focus:border-blue-500 resize-none"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold py-3 px-6 rounded focus:outline-none transition duration-300"
        >
          Add Todo
        </button>
      </form>
      <button
        onClick={handleViewAllTodos}
        className="bg-gray-500 hover:bg-gray-600 w-1/2 mt-8 text-white font-semibold py-3 px-6 rounded focus:outline-none transition duration-300"
      >
        View All Todos
      </button>
    </div>
  );
};

export default AddTodo;
