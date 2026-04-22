import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap
         justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap
         justify-center gap-3 shadow-lg bg-white pc-3 py-2 rounded-3xl">

            <button
              // calback is a function 
              onClick={() => setColor("red")} //why to write this ?? Onclick expect function to pass  - not want return 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Red" }}> Red</button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}> Green</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}> blue</button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}> orange</button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}> pink</button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}> black</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
