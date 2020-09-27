import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

export const GenreFilter = (name) => {
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const changeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        genre: e.target.value
      },
      );
  }

  return (
    <div>
      Genre Filter: <input name={name} value={filterValues[`${name}`]} onChange={changeHandler}/>
    </div>
  );
}
