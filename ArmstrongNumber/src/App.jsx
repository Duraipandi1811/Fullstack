
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
    <h1>ArmStrongNumber</h1>
    <div className='Container'>
      <label>Enter the Value</label>
      <input type="text" value={text} onChange={
        (e)=> setText(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleadd}>Clear</button>
      <button onClick={handleClear}>Submit</button>
    </div>
    <div className='result'>
      {display}
    </div>
   </>
  )
}

export default App
