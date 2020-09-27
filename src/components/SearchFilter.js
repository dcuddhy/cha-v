import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

export const SearchFilter = (name) => {
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const changeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        search: e.target.value
      },
      );
  }

  return (
    <div>
      Search Filter: <input name={name} value={filterValues[`${name}`]} onChange={changeHandler}/>
    </div>
  );
}
