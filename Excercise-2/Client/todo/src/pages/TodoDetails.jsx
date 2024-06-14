import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoDetails = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodoById = async () => {
            try {
                const response = await fetch(`http://localhost:3000/todo/gettodo/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch todo');
                }
                const data = await response.json();
                setTodo(data.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTodoById();
    }, [id]);

    const hanldeComplete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/todo/deleteTodo/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            navigate('/todos');
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {todo && (
                <>
                    <div className="w-96 bg-white rounded-lg shadow-md flex flex-col items-center mb-8">
                        <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-todo-plus/master/resources/logo/logo.png" alt="" className="w-full h-auto mb-4 rounded-t-lg" />
                        <div className="p-6 flex flex-col items-center">
                            <h2 className="text-xl text-center font-semibold text-gray-800 mb-3">{todo.title}</h2>
                            <p className="text-gray-600 text-center">{todo.description}</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none mt-4 transition duration-300" onClick={() => hanldeComplete(todo._id)}>Mark As Completed</button>
                        </div>
                    </div>
                    <button className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full focus:outline-none transition duration-300" onClick={handleClick}>Add More Todos</button>
                </>
            )}
        </div>
    );
};

export default TodoDetails;
