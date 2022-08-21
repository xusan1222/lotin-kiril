import React from "react";

export default function InputValue(props) {
  return (
    <div>
      <input
        onChange={props.ValueChange}
        value={props.value}
        className="inp2"
        type="number"
        placeholder="valyuta qiymati..."
      />
      <select className="sel1" onChange={props.selectChange} value={props.sValue}>
        {props.CountryValue.map((value , index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}
