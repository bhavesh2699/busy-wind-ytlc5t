import React from "react";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";

import "./styles.scss";

const List = ({ data, handleOnChange, addRow, removeRow }) => {
  return (
    <div className="container">
      {data.map((items, i1) => (
        <div key={i1} className="content">
          <div className="content-row">
            {items.map((item, i2) => (
              <TextField
                key={i2}
                label={item.label}
                value={item.value}
                onChange={(e) => handleOnChange(e, i1, i2)}
                variant="outlined"
                name={item.name}
              />
            ))}
          </div>
          <div>
            <AddCircleIcon onClick={addRow} />
            {data.length > 1 && (
              <RemoveCircleIcon onClick={() => removeRow(i1)} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
