import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './Product'

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
  return (
    <div>
      <h1>Learning {course}</h1>
      <p>This is my first React application</p>
      <h3>My React shop</h3>
      <br /><br />
      {products.map((item, index) => (
        <Product key={index} name={item.name} price={item.price} />
      ))}
      <br /><br />

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
    </div>
    
  );
}

export default App
