import React from 'react';

export const Dropdown = (props) => {
  const amStates = props.values;
  const callChangeHandler = (e) => {
    props.changeHandler(e.target.value)
  }
  
  return (
    <div>
        {props.label}: 
        <select name="states" id="am-state-selection-dropdown" onChange={callChangeHandler}>
          <option key="option-blank" value="" > All </option>
          {amStates.map(amState => 
            <option key={`option-${amState}`} value={`${amState}`} > {amState} </ option>
          )}
        </select>
    </div>
  );
}
