import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

export const StateFilter = (name) => {
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const changeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        state: e.target.value
      },
      );
  }

  return (
    <div>
      State Filter: <input name={name} value={filterValues[`${name}`]} onChange={changeHandler}/>
    </div>
  );
}
