import React, { useState } from 'react';
import Block from '../Block/Block';
export default function TableRow(props) {
  return (
    <tr>
      {props.data.map((value) => (
        <Block
          key={value}
          keyValue={value}
          valueValue={props.sudokuObject[value]}
          getKeyVal={props.getKeyVal}
        />
      ))}
    </tr>
  );
}
