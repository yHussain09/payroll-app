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

const DataTableRow = (props) => {
  const { columns, rows } = props;
  // console.log(props);
  // const [selectRow, setSelectRow] = React.useState({});
  const setSelectRowHandler = (row) => {
    // setSelectedRow(row);
    // console.log(row);
    props.func(row);
  };
  const dataTableRows = (columns, rows) => {
    return rows.map((row) => (
      <tr key={row._id} onClick={() => setSelectRowHandler(row)}>
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
  // const { setSelectedRow } = props.func;
  // console.log(setSelectedRow);
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
            <DataTableRow columns={columns} rows={rows} func={props.func} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
