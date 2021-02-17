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
    <div key={`inline-form-${i}`} selectable={false} className="if-editing card">
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
      />
    </div>
  ) : (
    
    <div key={`tr-${i}`} selectable={false} className="not-editing card">
      {header.map((y, k) => (
        
        <div key={`trc-${k}`}>{x[y.prop]}</div>
      ))}
      <div className="edit-icon">
        
        <EditFilled onClick={() => startEditing(i)}/>
        <hr></hr>
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