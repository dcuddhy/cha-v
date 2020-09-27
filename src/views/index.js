import React from 'react';
import { Table } from '../components/table';

// Let's use app as a shell to display a home/index
export const Index = (data) => {
  console.log('huh? ', data.data);
  const tableData = data.data;
  return (
    <>
    <div className="first-div">
      Table below:
    </div>
    <Table tableData={tableData} />
    </>
  );
}