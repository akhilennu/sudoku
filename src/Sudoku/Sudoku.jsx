import React from 'react';
import TableRow from './TableRow/TableRow';
import './Sudoku.css';

export default function Sudoku(props) {
  const rows = 'ABCDEFGHI';
  const columns = '123456789';
  const table_data = [];

  for (const i of rows) {
    const row_data = [];
    for (const j of columns) {
      row_data.push(i + j);
    }
    table_data.push(row_data);
  }
  console.log(table_data);
  return (
    <table>
      <tbody>
        {table_data.map((data) => (
          <TableRow data={data} />
        ))}
      </tbody>
    </table>
  );
}
