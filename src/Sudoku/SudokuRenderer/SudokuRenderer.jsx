import React from 'react';
import TableRow from './TableRow/TableRow';
import './SudokuRenderer.css';

export default function SudokuRenderer(props) {
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

  const getKeyVal = (k, v) => {
    let obj = props.sudokuObject;
    obj[k] = v;
    props.getSudokuObject(obj);
  };

  return (
    <table>
      <tbody>
        {table_data.map((data, index) => (
          <TableRow
            key={index}
            data={data}
            sudokuObject={props.sudokuObject}
            getKeyVal={getKeyVal}
          />
        ))}
      </tbody>
    </table>
  );
}
