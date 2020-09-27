import React, {useState} from 'react';
import { Table } from '../components/table';
import { Filter } from '../components/filter';

// Let's use app as a shell to display a home/index
export const Index = (data) => {
  const tableData = data.data;

  return (
    <>
    <div className="first-div">
      Table below:
    </div>
    <Filter name='state' />
    <Table tableData={tableData} />
    </>
  );
}