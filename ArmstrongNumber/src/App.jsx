
import { useState } from 'react';
import './App.css'

import isArmstrong from './Armstrong';

function App() {

    const[text,setText]= useState("");
    const[display,setDisplay]=useState("");
    const handleSubmit =() => {   
      let result = isArmstrong(text);
      setDisplay(result ? "Armstrong Number" : "Not a Armstrong Number");
    };


    const handleClear = () => {
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
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    <div className='result'>
      {display}
    </div>
   </>
  )
}

export default App
