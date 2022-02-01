import React, { useEffect, useState } from "react";
import { debounce, uniq } from "lodash";
import axios from "axios";
import YoutubeBody from "../Components/YoutubeBody";
import Searchbar from "../Components/Searchbar";
import "../App.css";
import Loader from "react-js-loader";

function Apiyoutube() {
  const [ResponseData, setData] = useState(<h1>hello</h1>);
  const [VideoID, setVideoID] = useState([]);
  const [SearchParams, setSearchParams] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const URL = `https://sleepy-mcclintock-53c848.netlify.app/.netlify/functions/api/${SearchParams}`;

  const Fetcher = async () => {
    // eslint-disable-next-line no-unused-vars
    const fetch = await axios.get(URL).then((res) => {
      // console.log(res.data);
      const a = res.data;
      setData(a);
      setIsLoading(false);
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
    console.log(h);
    setVideoID(h.slice(0, -1));
  };

  const ChangeHandler = debounce((e) => {
    const b = e.target.value.split(" ").join("+");
    setSearchParams(b);
  }, 500);

  const SubmitHandler = (q) => {
    q.preventDefault();
    setIsLoading(true);
    fetchHREF(q);
  };

  const Clear = ()=>{
    setSearchParams("");
    setData("");
    setVideoID([]);
  }
  
  useEffect(() => {
    Fetcher();
    // console.log("USEEFFECT");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SubmitHandler]);
  return (
    <React.Fragment>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Searchbar
          SubmitHandler={SubmitHandler}
          ChangeHandler={ChangeHandler}
          Clear={Clear}
          searchParams={SearchParams}
        />

        {IsLoading && (
          <Loader
            type="hourglass"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={100}
          />
        )}
        {!IsLoading && (
          <div className="App" style={{ backgroundColor: "black" }}>
            <YoutubeBody VideoID={VideoID} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Apiyoutube;
