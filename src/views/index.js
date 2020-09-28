import React from 'react';
import { GenreFilter } from '../components/GenreFilter';
import { SearchFilter } from '../components/SearchFilter';
import { StateFilter } from '../components/StateFilter';
import { Table } from '../components/table';

export const Index = (data) => {
  const tableData = data.data;

  return (
    <>
      <GenreFilter name='genre' />
      <StateFilter name='state' />
      <SearchFilter name='search' />
      <Table tableData={tableData} />
    </>
  );
}