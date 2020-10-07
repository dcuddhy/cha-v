import React, {useContext, useState} from 'react';
import { Filter } from '../components/Filter';
import { FilterContext } from '../contexts/filterContext'
import { Table } from '../components/Table';

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

  const [searchValue, setSearchValue] = useState('');

  const searchChangeHandler = (e) => {
    const value = e.target.value;

    setSearchValue(value);
    if (value === "") {
      searchSubmitHandler(value);
    }
  }
  const searchSubmitHandler = (value) => {
    setFilterValues(
      {...filterValues,
        search: value,
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
  
  const [genreValue, setGenreValue] = useState('');

  const genreChangeHandler = (e) => {
    setGenreValue(e.target.value);
  }
  const genreSubmitHandler = (value) => {
    setFilterValues(
      {...filterValues,
        genre: value,
        pagination: 0,
      },
    );
  }

  return (
    <>
      DONE
      <Filter name='search' label="Search Filter" changeHandler={searchChangeHandler} value={searchValue} filterValues={filterValues} submitHandler={searchSubmitHandler} />

      Genre, State, Attire should be dropdowns
      {/* <Filter name='genre' label="Genre Filter" changeHandler={genreChangeHandler} value={genreValue} filterValues={filterValues} submitHandler={genreSubmitHandler}/> */}
      {/* <Filter name='state' label="State Filter" changeHandler={stateChangeHandler} filterValues={filterValues} />
      <Filter name='attire' label="Attire Filter" changeHandler={attireChangeHandler} filterValues={filterValues} /> */}
      <Table tableData={tableData} />
    </>
  );
}