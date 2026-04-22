import { useState, useCallback,useEffect , useRef} from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")
 const [isDisabled, setIsDisabled] = useState(true)

   const handleEnable = ()=> {
   setIsDisabled(prev => !prev)
   };

  // ref hook
  const passwordRef =  useRef(null)
  // memoization - catche store between re-render
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword]) // setpassword for optimization

  const copyPasswordToClipBoard = useCallback(()=> {
    passwordRef.current?.select();
    // passwordRef.current?.setSelection(0,20)  how many characters need to select 
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400'>
        <h2 className='text-white text-center my-3'>Password generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />
          <button 
          // disabled = {isDisabled}
          // onSelect={handleEnable}
          onClick={copyPasswordToClipBoard}
          //  onClick={handleEnable}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label> length  : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);

              }} />
            <label htmlFor='nunberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
