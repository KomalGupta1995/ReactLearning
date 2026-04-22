import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
let myobj = {
  username : "komal",
  age : 30
}
let newArray = [1,2,3,4,5]
  return (
    <>
    <Card username = "komal" someobj = {myobj} somearray = {newArray} />
       <Card username = "vijay"/>
    </>
  )
}
export default App
