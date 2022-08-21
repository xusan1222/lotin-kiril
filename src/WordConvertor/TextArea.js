import React from "react";
import { TextareaAutosize } from "@mui/material";
import "./convert.css";

export default function TextArea(props) {
  return (
    <div className="areas">
      <TextareaAutosize
        className="text"
        id={props.id}
        value={props.value}
        onChange={props.ValueChange}
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: 550 , height:200 , maxHeight:200, maxWidth:550, overflowY:'scroll'}}
      />
    </div>
  );
}
