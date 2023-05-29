import React from "react";

const DataTableColumn = ({ columns }) => {
  const dataTableColumns = (columns) => {
    return columns.map((column, index) => (
      <th key={index}>{column.columnName}</th>
    ));
  };

  return (
    <thead>
      <tr>{dataTableColumns(columns)}</tr>
    </thead>
  );
};

const selectRow = (rowIndex) => {
  console.log(rowIndex);
};

const DataTableRow = (props) => {
  const { columns, rows } = props;

  const dataTableRows = (columns, rows) => {
    return rows.map((row) => (
      <tr key={row._id} onClick={() => selectRow(row)}>
        {columns.map((column) => {
          return (
            <td key={`${column._id}-${row._id}`}>{row[column.columnField]}</td>
          );
        })}
      </tr>
    ));
  };

  return <tbody>{dataTableRows(columns, rows)}</tbody>;
};

const DataTable = (props) => {
  const { title, columns, rows } = props.data;

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <DataTableColumn columns={columns} />
            {/* <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot> */}
            <DataTableRow columns={columns} rows={rows} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
