import React from 'react';

export const Filter = (props) => {
  const submit = () => {
    props.submitHandler(props.value);
  }

  const enterSubmit = (e) => {
    if (e.charCode !== 13) {
      return;
    }

    submit();
  }

  return (
    <div>
      {props.label}: <input name={props.name} value={props.value} onChange={props.changeHandler} onKeyPress={enterSubmit} />
      <button onClick={submit}> Search </button>
    </div>
  );
}
