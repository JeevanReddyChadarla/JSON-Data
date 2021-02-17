import React from "react";
import EditIcon from "material-ui/svg-icons/image/edit";

import InlineForm from "./InlineForm";

const row = (
  x,
  i,
  header,
  startEditing,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return currentlyEditing ? (
    <div key={`inline-form-${i}`} selectable={false}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
      />
    </div>
  ) : (
    <div key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <div key={`trc-${k}`}>{x[y.prop]}</div>
      ))}
      <div>
        <EditIcon onClick={() => startEditing(i)} />
        
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