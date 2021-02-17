import React from "react";
import {EditFilled} from '@ant-design/icons';
import InlineForm from "./InlineForm";

const row = (
  x,
  i,
  header,
  startEditing,
  editIdx,
  handleSave,
) => {
  const currentlyEditing = editIdx === i;
  return currentlyEditing ? (
    <div key={`inline-form-${i}`} selectable={false}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
      />
    </div>
  ) : (
    <div key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <div key={`trc-${k}`}>{x[y.prop]}</div>
      ))}
      <div>
        
        <EditFilled onClick={() => startEditing(i)}/>
      </div>
    </div>
  );
};

export default ({
  data,
  header,
 
  startEditing,
  editIdx,
  handleSave,
  stopEditing,

}) => (
    <div>
        
        {data.map((x, i) =>
        row(
          x,
          i,
          header,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </div>
      
    
);