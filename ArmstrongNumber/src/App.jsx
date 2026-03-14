
import { useState } from 'react';
import './App.css'

function App() {

    const[text,setText]= useState("");
    const[display,setDisplay]=useState("");
    const handleadd =()=>{
      setDisplay(text);
    };
    const handleClear=()=>{
      setText("");
      setDisplay("");
    };

    return (
    <>
      <div className="h-screen w-screen h-screen w-screen flex justify-center items-center">
        <div className='Container bg-gray-200 h-150 w-150'>
          <h1>Armstrong Number Finder</h1>
          <label>Enter the Value</label>
          <input type="text" value={text} onChange={
            (e)=> setText(e.target.value)}
          />
          <button onClick={handleadd}>Clear</button>
          <button onClick={handleClear}>Submit</button>
        </div>
        <div className='result'>
          {display}
        </div>
      </div>
    </>
    )
}

export default App
