import { useState } from 'react'
import Navbar from './Navbar/'
import Content from './Content/'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Data, setData] = useState(0)
  const Increase = () =>{
    setCount(count + 1)
  }
  const Decrease = () =>{
    if(count > 0)setCount(count - 1)
  }
  return (
    <div className="App">
      <div className='container'>
        <Navbar count={count} setCount={setCount}/>
        <Content count= {count} Increase= {Increase} Decrease= {Decrease} setCount={setCount}/>
      </div>
    </div>
  )
}

export default App
