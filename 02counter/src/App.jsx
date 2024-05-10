import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(6) 

  // let counter = 6

  const addValue = () => {
    console.log("value added",counter);
    counter=counter+1
    setCounter(counter)
  }

  const subValue = () =>{

    if (counter>0) {
            console.log("subtracted ",counter);
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>Button Counter</h1>
     <h2>Counter Value :{counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
