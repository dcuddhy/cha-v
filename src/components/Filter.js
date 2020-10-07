import React from 'react';

export const Filter = (props) => {
  console.log('props: ', props);
  const submit = () => {
    props.submitHandler(props.value);
  }
  return (
    <div>
      {/* {props.label}: <input name={props.name} value={props.filterValues[`${props.name}`]} onChange={props.changeHandler}/> */}
      {props.label}: <input name={props.name} value={props.value} onChange={props.changeHandler}/>
      <button onClick={submit}> Search </button>
    </div>
  );
}
