import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

export const Filter = (name) => {
  const {filterValue, setFilterValue} = useContext(FilterContext);

  const changeHandler = (e) => {
    setFilterValue(e.target.value);
  }

  return (
    <input name={name} value={filterValue} onChange={changeHandler}/>
  );
}
