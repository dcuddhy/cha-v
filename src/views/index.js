import React, {useState} from 'react';
import { Table } from '../components/table';
import { StateFilter } from '../components/StateFilter';
import { GenreFilter } from '../components/GenreFilter';
import { SearchFilter } from '../components/SearchFilter';

// Let's use app as a shell to display a home/index
export const Index = (data) => {
  const tableData = data.data;

  return (
    <>
    <div className="first-div">
      Table below:
    </div>
    <GenreFilter name='genre' />
    <StateFilter name='state' />
    <SearchFilter name='search' />
    <Table tableData={tableData} />
    </>
  );
}