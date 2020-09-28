import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

export const AttireFilter = (name) => {
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const changeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        attire: e.target.value
      },
      );
  }

  return (
    <div>
      Attire Filter: <input name={name} value={filterValues[`${name}`]} onChange={changeHandler}/>
    </div>
  );
}
