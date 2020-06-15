import React, { useState } from 'react';
import './Block.css';

export default function Block(props) {
  let [value, setValue] = useState(props.valueValue);
  let setValueParam = (e) => {
    setValue(e.target.value);
    props.getKeyVal(props.keyValue, e.target.value);
  };
  return (
    <td className="Block">
      <input value={value} onChange={setValueParam} />
    </td>
  );
}
