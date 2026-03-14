
import { useState } from 'react';
import './App.css'

import isArmstrong from './Armstrong';

function App() {

    const[text,setText]= useState("");
    const[display,setDisplay]=useState("");

    const handleSubmit =() => {   
      if(text == "") {
        setDisplay("Enter a Number before submit");
        return;
      }
      let result = isArmstrong(text);
      setDisplay(result ? "Armstrong Number" : "Not a Armstrong Number");
    };

    const handleClear = () => {
      setText("");
      setDisplay("");
    };

  return (
   <>
    <div className="h-screen w-screen flex justify-center items-center">
      <div className='Container bg-gray-200 h-150 w-150 border p-5 flex flex flex-col items-center '>
            <h1 className='text-2xl '>ArmStrong Number</h1>
            <div className='mt-6'>
              <label>Enter the Value</label>
                <input type="text" className='border ms-3' value={text} onChange={
                  (e)=> setText(e.target.value)}
                />
            </div>
            <div className="mt-5 w-50 ">
               <button onClick={handleClear} className='border bg-red-300  p-3'>Clear</button>
               <button onClick={handleSubmit} className='border  bg-emerald-500 p-3 ms-6'>Submit</button>
            </div>
           
            <div className={`result mt-5 ${display == "Armstrong Number" ? "text-green-900" : "text-red-900"} `}>
              {display}
            </div>
            
      </div>
    </div>
    
   </>
  )
}

export default App
