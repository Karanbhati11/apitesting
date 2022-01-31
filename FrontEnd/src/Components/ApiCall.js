import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "./Body";
function ApiCall() {
  const [SearchParam, setSearchParams] = useState("");
  const [VideoID, setVideoID] = useState("");
  const [SearchResult, setSearchResult] = useState([]);
  const PLAY_URL = `https://www.youtube.com/embed/${VideoID}`;
    const fetcher = async () => {
      const response = await axios.get(
        `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${VideoID}&format=json`
      );
      const data = await response.data;
      // console.log(data);
      setSearchResult(data);
      console.log(SearchResult);

    
    };
  

  useEffect(() => {
    fetcher();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchParam]);
  const HandleChange = (e) => {
    e.preventDefault();
    const a = e.target.value;
    const b = a.split("=").join("+");
    setSearchParams(e.target.value);
    // setSearchResult([...SearchResult,PLAY_URL]);
    setVideoID(b[1]);
  };

  
  return (
    <React.Fragment>
         <div className="container">
          <form
            style={{
              marginTop: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="form-control "
              id="exampleDataList"
              type="text"
              placeholder="Enter Video Url"
              value={SearchParam}
              onChange={(e) => HandleChange(e)}
            ></input>
            <button  style={{ margin: "10px" }} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Body
          SearchParam={SearchParam}
          PLAY_URL={PLAY_URL}
          SearchResult={SearchResult}
          HandleChange={HandleChange}
        />
   </React.Fragment>
  );
};

export default ApiCall;
