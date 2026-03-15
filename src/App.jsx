import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './Product'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Navbar from './components/Navbar'

function App() {
  const course = "React";
  const [count, setCount] = useState(0);
  
  const products = [
    { name: "Nike shoes", price:50 },
    { name: "Adidas sneakers", price:70 },
    { name: "Puma t-shirt", price:30 }
  ];


  function increaseCount(){
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    setTodos([...todos, task]);
    setTask("");
  }


  return (
    <>
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<user/>}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
    </div>


    
    <br />
    <br /><br /><br />
      <h1>Learning {course}</h1>
      <p>This is my first React application</p>
      <h3>My React shop</h3>
      {products.map((item, index) => (
        <Product key={index} name={item.name} price={item.price} />
      ))}

      <h2>React Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>
        Increase
      </button>
      <button onClick={decreaseCount}>
        Decrease
      </button>
      <button onClick={resetCount}>
        Reset
      </button>
      
      {/* This is a Todo App */}

      <h4>Todo App</h4>
      <input type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>
        Add
      </button>
      
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </>

    
    
  );
}
export default App
