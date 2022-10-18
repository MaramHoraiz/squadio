import React, { useState } from "react";

function Dropdown({ options = [], val }) {
  const [value, setValue] = useState(val? val : options[0].name)
  const renderedOptions = options.map((target) => (
    <option value={target.value} key={target.value}>{target.name}</option>
  ));
  return renderedOptions.length > 0 ? (
    <select className="ddl" value={value } onChange={(e)=>{setValue(e.target.value)}}>
      {renderedOptions}
    </select>
  ) :
    <></>;
}
export default Dropdown;
