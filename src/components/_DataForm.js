import React from "react";

const DataForm = (props) => {
  const { data } = props;
  // const [data, setData] = React.useState({});
  // console.log();
  // setData()
  const handleChange = (e) => {
    console.log("handleChange called");
    // setName(e.target.value);
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue={""}
              onChange={handleChange}
              value={data.name}
            />
            {/* <div id="emailHelp" class="form-text">
                          We'll never share your email with anyone else.
                        </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              defaultValue={""}
              onChange={handleChange}
              value={data.position}
            />
          </div>
          {/* <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
