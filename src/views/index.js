import React, {useContext} from 'react';
import { Filter } from '../components/Filter';
import { FilterContext } from '../contexts/filterContext'
import { Table } from '../components/table';

export const Index = (data) => {
  const tableData = data.data;
  const {filterValues, setFilterValues} = useContext(FilterContext);

  const attireChangeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        attire: e.target.value,
        pagination: 0,
      },
      );
  }

  const searchChangeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        search: e.target.value,
        pagination: 0,
      },
      );
  }
  
  const stateChangeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        state: e.target.value,
        pagination: 0,
      },
      );
  }
  
  const genreChangeHandler = (e) => {
    setFilterValues(
      {...filterValues,
        genre: e.target.value,
        pagination: 0,
      },
      );
  }

  return (
    <>
      <Filter name='genre' label="Genre Filter" changeHandler={genreChangeHandler} filterValues={filterValues} />
      <Filter name='state' label="State Filter" changeHandler={stateChangeHandler} filterValues={filterValues} />
      <Filter name='search' label="Search Filter" changeHandler={searchChangeHandler} filterValues={filterValues} />
      <Filter name='attire' label="Attire Filter" changeHandler={attireChangeHandler} filterValues={filterValues} />
      <Table tableData={tableData} />
    </>
  );
}