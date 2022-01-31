import React, { useEffect, useState } from "react";
import { uniq } from "lodash";
import axios from "axios";
function Apiyoutube() {
  const [ResponseData, setData] = useState(<h1>hello</h1>);
  const [VideoID, setVideoID] = useState([]);
  const [SearchParams, setSearchParams] = useState("");
  const URL = `http://localhost:8080/${SearchParams}`;
  const Fetcher = async () => {
    // eslint-disable-next-line no-unused-vars
    const fetch = await axios.get(URL).then((res) => {
      const a = res.data;
      setData(a);
    });
  };

  const fetchHREF = (q) => {
    q.preventDefault();
    const a = ResponseData;
    const b = a.split(" ");
    // eslint-disable-next-line array-callback-return
    const c = b.map((item) => {
      if (item.includes("href")) {
        const a = item.split("=");
        return a[1];
      }
    });
    // eslint-disable-next-line array-callback-return
    const d = c.filter((item) => {
      if (item !== undefined) {
        return item;
      }
    });
    // eslint-disable-next-line array-callback-return
    const e = d.map((item) => {
      if (item.includes("youtube")) {
        const a = item.split("/youtube/");
        return a[1];
      }
    });
    // eslint-disable-next-line array-callback-return
    const f = e.filter((item) => {
      if (item !== undefined) {
        return item;
      }
    });
    const g = uniq(f);
    const h = g.join(",").split(/[",]+/g).join(",").split(",");
    setVideoID(h.slice(0,-1));
  };

  useEffect(() => {
    Fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchParams]);

  const ChangeHandler = (e) => {
    const b = e.target.value.split(" ").join("+");
    setSearchParams(b);
  };

  return (
    <React.Fragment>
      <div className="container" style={{ backgroundColor: "black" }}>
        <form
          onSubmit={(q) => {fetchHREF(q)}}
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
            onChange={(e) => {
              document
                .getElementById("exampleDataList1")
                .addEventListener("keyup", (e) => {
                  ChangeHandler(e);
                });
            }}
          />
          <button
          type="submit"
            className="btn btn-primary"
            style={{ padding: "10px", margin: "10px" }}
          >
            Submit
          </button>
        </form>
        <div className="container" style={{ backgroundColor: "black" }}>
          <div className="row" style={{ backgroundColor: "black" }}>
            {VideoID.map((item) => {
              return (
                <div
                  key={Math.random()}
                  className="col-4 card"
                  style={{ padding: "5px", backgroundColor:'grey' }}
                >
                  <iframe
                    title="video"
                    // width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Apiyoutube;
