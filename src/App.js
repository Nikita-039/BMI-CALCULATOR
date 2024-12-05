import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  function onweightchange(event){
    setWeight(event.target.value)
  }
  function onheightchange(event){
    setHeight(event.target.value)
  }
  const output= useMemo(()=> {
    const calculateheight = height/100;
    return(weight/ (calculateheight*calculateheight)).toFixed(1)

  },[weight,height]);
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'> Weight: {weight}kg</p>
        <input className='input-slider' type='range'
        step="1"
        min="40"
        max="200"
        onChange={onweightchange}/>
        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider' type='range'
        onChange={onheightchange}
        min='140'
        max='220'/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      
      </div>
      </main>
  )
}

export default App
