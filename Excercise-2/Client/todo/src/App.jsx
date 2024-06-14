import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/tododetails" element={<TodoDetails />} />
          </Routes>
  </BrowserRouter>
  )
}

export default App
