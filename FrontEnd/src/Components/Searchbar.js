import React from 'react';
// import '../../App.css';
const Searchbar = React.memo(
  ({ SubmitHandler, ChangeHandler, Clear, searchParams }) => {
    return (
      <React.Fragment>
        <div className="App" style={{ backgroundColor: "black" }}>
          <form
            onSubmit={(q) => SubmitHandler(q)}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <input
              style={{ width: "200px", padding: "10px", margin: "10px" }}
              className="form-control"
              placeholder="Search Param"
              id="exampleDataList1"
              // value={searchParams}
              onChange={(e) => ChangeHandler(e)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              // onClick={(q) => SubmitHandler(q)}
              style={{ padding: "10px", margin: "10px" }}
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => Clear()}
              style={{ padding: "10px", margin: "10px" }}
            >
              Clear
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
);

export default Searchbar;
