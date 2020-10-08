import React, {useContext, useState} from 'react';
import { Dropdown } from '../components/Dropdown';
import { Filter } from '../components/Filter';
import { generateList } from '../components/Helpers';
import { Table } from '../components/TableTable';
import { FilterContext } from '../contexts/filterContext'

export const Index = (data) => {
  const tableData = data.data;
  const {filterValues, setFilterValues} = useContext(FilterContext);
  const [searchValue, setSearchValue] = useState('');
  const amStates = generateList(tableData, 'state');
  const attires = generateList(tableData, 'attire');
  const genres = generateList(tableData, 'genre');

  const attireChangeHandler = (value) => {
    setFilterValues(
      {...filterValues,
        attire: value,
        pagination: 0,
      },
    );
  }

  const genreChangeHandler = (value) => {
    setFilterValues(
      {...filterValues,
        genre: value,
        pagination: 0,
      },
    );
  }

  const searchChangeHandler = (e) => {
    const value = e.target.value;
    console.log('e! ', e.target);
    console.log('charcode! ', e.charCode);

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

  const stateChangeHandler = (value) => {
    setFilterValues(
      {...filterValues,
        state: value,
        pagination: 0,
      },
    );
  }

  return (
    <>
      <Filter name='search' label="Search Filter" changeHandler={searchChangeHandler} value={searchValue} filterValues={filterValues} submitHandler={searchSubmitHandler} />
      <Dropdown name='state' label="State Filter" changeHandler={stateChangeHandler} values={amStates} filterValues={filterValues} />
      <Dropdown name='genre' label="Genre Filter" changeHandler={genreChangeHandler} values={genres} filterValues={filterValues} />
      <Dropdown name='attire' label="Attire Filter" changeHandler={attireChangeHandler} values={attires} filterValues={filterValues} />
      <Table tableData={tableData} />
    </>
  );
}