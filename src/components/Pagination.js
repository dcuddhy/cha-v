import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'
import "./Pagination.css"

export const Pagination = (pagesArray) => {
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const clickHandler = (e) => {
    setFilterValues(
      {...filterValues,
        pagination: e.target.id
      },
      );
  }

  return (
    <div className="pagination-container">
      {pagesArray.pagesArray.map(page => 
        <div key={`page-${page}`} className="page-button" id={`${page}`}onClick={clickHandler}> {page+1} </div>
        )}
    </div>
  );
}
