import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const Increment = () =>{
    //console.log('add value', Math.random());
    if (counter < 20){
//       setCounter(counter + 1);
//       setCounter(counter + 1);
// setCounter(counter + 1);
// setCounter(counter + 1);

setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
    }
  }

  const decrement = () => {
    if (counter > 0) {
    setCounter(counter - 1);
    }
    else{
      alert('Counter value cannot be less than 0');
    }
  }

  return (
    <>
    <h1> Hooks in react</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={Increment}
    > Increment {counter}</button>
    <br />
    <button 
    onClick = {decrement}>  Decrement {counter}</button>
    </>

  )
}

export default App
