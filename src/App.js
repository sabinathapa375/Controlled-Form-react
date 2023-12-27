import React from 'react';
import { useState } from 'react';

const ControlledComponent=()=>{
  const [inputValue, setInputValue] = useState('');

  const [selectedOption, setselectedOption] = useState('option1');

  const [isChecked, setisChecked] =  useState(false);
  const handleChange=(event)=>{
    setInputValue(event.target.value);
  };

  const handleOptionChange=(event)=>{
    setselectedOption(event.target.value)
  }

  const handleCheck=(event)=>{
    setisChecked(event.target.checked)
  }

  return(
    
      <form>

        <label>
          Input Value
          <input type="text" value={inputValue} onChange={handleChange}/>
        </label>
        <p>Input Value : {inputValue}</p>


        {/* For Dropdown */}
        <label>
          Select an option:
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
            </select>
        </label>
        <p>Selected Option:{selectedOption}</p>

        {/* For checkbox */}
        <label htmlFor='color'>
          <input type='checkbox' checked={isChecked} onChange={handleCheck}/>
          Orange
        </label>

      </form>
  )
}

export default ControlledComponent;


 
  