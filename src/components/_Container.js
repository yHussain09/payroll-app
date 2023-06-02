import React from "react";
import DataTable from "./_DataTable";
import DataForm from "./_DataForm";

function Container(props) {
  const { columns, rows } = props.data;
  //   console.log(columns, rows);
  const [selectedRow, setSelectedRow] = React.useState({});
  //   console.log(setSelectedRow);
  return (
    <div className="row">
      <div className="col-xl-12 col-md-6 mb-4">
        <DataTable title="Employees" data={props.data} func={setSelectedRow} />
      </div>
      <div className="col-xl-12 col-md-6 mb-4">
        <DataForm title="Employee" data={selectedRow} />
      </div>
    </div>
  );
}

export default Container;
