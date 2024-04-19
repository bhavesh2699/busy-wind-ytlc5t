import React from "react";

import "./styles.css";

import List from "./List/List";

const App = () => {
  const [data, setData] = React.useState([
    [
      {
        label: "Property Name",
        field: "propertyName",
        value: "",
        name: "00"
      },
      {
        label: "Value",
        field: "value",
        value: "",
        name: "01"
      }
    ]
  ]);

  const handleOnChange = (e, row, col) => {
    const newData = data.map((d, i) => {
      if (i === row) {
        d[col].value = e.target.value;
      }

      return d;
    });
    setData(newData);
  };

  const addRow = () => {
    console.log(data);
    setData([
      ...data,
      [
        {
          label: "Property Name",
          field: "propertyName",
          value: "",
          name: `${data.length}0`
        },
        {
          label: "Value",
          field: "value",
          value: "",
          name: `${data.length}1`
        }
      ]
    ]);
  };

  const removeRow = (index) => {
    const _data = [...data];
    _data.splice(index, 1);
    setData(_data);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <List
        data={data}
        addRow={addRow}
        removeRow={removeRow}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default App;
