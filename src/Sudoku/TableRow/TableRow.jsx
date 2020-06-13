import React, { useState } from 'react';
import Block from '../Block/Block';
export default function TableRow(props) {
  return (
    <tr>
      {props.data.map((value) => (
        <Block value={value} />
      ))}
    </tr>
  );
}
