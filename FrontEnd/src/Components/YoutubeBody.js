import React from 'react';

const  YoutubeBody=React.memo (({VideoID}) =>{
  return (
    <React.Fragment>
      <div className="row" style={{ backgroundColor: "black",display:"flex",justifyContent:'space-evenly',alignContent:'center',padding:'0',flexWrap:'wrap' }}>
        {VideoID.map((item) => {
          return (
            <div
              key={Math.random()}
              className="col-3 card"
              style={{ margin:'2px', backgroundColor: "grey",alignContent:'center',justifyContent:'center',padding:'0' }}
            >
              <iframe
                title="video"
                // width="460"
                height="315"
                width="100%"
                src={`https://www.youtube.com/embed/${item}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
})

export default YoutubeBody;
