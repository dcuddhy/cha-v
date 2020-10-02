import React from 'react';

export const Filter = (props) => {
  return (
    <div>
      {props.label}: <input name={props.name} value={props.filterValues[`${props.name}`]} onChange={props.changeHandler}/>
    </div>
  );
}
