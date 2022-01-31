import React, { useEffect, useState } from "react";
import { uniq } from "lodash";
import axios from "axios";
// import Body from "../Components/Body";
function Apiyoutube() {
  // const body = document.querySelector("body");
  const [ResponseData, setData] = useState(<h1>hello</h1>);
  const [VideoID, setVideoID] = useState([]);
  const [SearchParams, setSearchParams] = useState("");
  // const PLAY_URL = `https://www.youtube.com/embed/${VideoID}`;
  // console.log(SearchParams);
  const URL = `http://localhost:8080/${SearchParams}`;
  // console.log(URL);
  const Fetcher = async () => {
    // eslint-disable-next-line no-unused-vars
    const fetch = await axios.get(URL).then((res) => {
      // console.log(res.data);
      const a = res.data;
      setData(a);
      // console.log(res.data);
    });
  };
  // body.innerHTML = ResponseData;

  const fetchHREF = (q) => {
    q.preventDefault();
    // console.log(SearchParams);
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
    // console.log(h);
    setVideoID(h);
  };
  // console.log(VideoID);

  useEffect(() => {
    Fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchParams]);

  const ChangeHandler = (e) => {
    const b = e.target.value.split(" ").join("+");
    setSearchParams(b);
    // console.log(b);
  };

  return (
    <React.Fragment>
      <form
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
            // ChangeHandler(e);
            document.getElementById("exampleDataList1").addEventListener("keyup", (e) => {ChangeHandler(e)})
          }}
        />
        <button
          className="btn btn-primary"
          style={{ padding: "10px", margin: "10px" }}
          onClick={(q) => {
            fetchHREF(q);
          }}
        >
          Submit
        </button>
      </form>
      <div className="container">
        <div className="row">
          {VideoID.map((item) => {
            return (
              <div className="col-4 card" style={{ padding: "5px" }}>
                <iframe
                  key={Math.random()}
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
    </React.Fragment>
  );
}

export default Apiyoutube;
