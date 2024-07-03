import { useState } from 'react'
import './App.css'
import Home from './home/Home.jsx'
import Navbar from './home/Navbar.jsx'
function App() {
   // let count = 0;
  // const handleClick = () => {
  //   count++;
  //   console.log(count)
  // }
  //state -> value will update dynamically

  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <h2 className='text-center'>Simple ReactJS Component</h2>
      <div className="container bg-info p-2 rounded-3">Count: {count}
        <hr/>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increase Count</button>
        {
          count > 0 && 
          <button className="btn btn-primary" onClick={() => setCount(count - 1)}> Decrease Count </button>
        }        <button className="btn btn-danger" onClick={() => setCount(0)}>Reset Count</button>
        {/* Conditional rendering : particular element or component will render while some conditional*/}
       
      </div>   
      {/* passing state to another component is called props */}

      <Home appCount={count} setCount={setCount}/>
    </>
  )
}

export default App
