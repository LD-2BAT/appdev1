import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
    const[isOn, setIsOn] = useState(false);

  return (
    <div>
        <h1>Toggle Button</h1>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      <p>{isOn ? "The button is ON" : "The button is OFF"}</p>
    </div>
  );
};

export default ToggleButton