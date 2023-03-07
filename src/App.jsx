import { useState } from "react";

function App() {
  //let counter = 0;
  const [counter, setCounter]=useState(0)

  return (
  <div>
    <h3>Contador</h3>
    <hr />
    <h1>{counter}</h1>
    <button 
      onClick={() =>{
        setCounter(counter +1); 
        console.log(counter)
      }}

      type="button" 
      className ="btn btn-primary">
        +1</button>

    <button 
      onClick={() =>{
        setCounter(counter -1); 
        console.log(counter)
      }}

      type="button" 
      className ="btn btn-success">
        -1</button>

    <button 
      onClick={() =>{
        setCounter(0); 
      }}

      type="button" 
      className ="btn btn-danger">
        0</button>


  </div>
  )
}

export default App
