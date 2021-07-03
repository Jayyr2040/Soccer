import React from 'react';
import Moment from 'react-moment';

function FullNews(props) {
    console.log("Full News Coverage",props.location.data?.props.news)

    let list = (props.location.data?.props.news.articles).map((item,index) => {
        return (
                    <li key={index}>
                    <div style={{ flexDirection: "row", display: "flex", height: "wrap" }}>
                    <a href={item?.url}><h4> News: {item?.title}</h4></a>
                    <span style={{ display: "inline-block", width: "50px" }}></span>
                    <h4> Source: {item?.source?.name}</h4>
                    <span style={{ display: "inline-block", width: "50px" }}></span>
                    <h4>
                    Published:{" "}
                    {<Moment fromNow>{item?.publishedAt}</Moment>}
                    </h4>
                    <span style={{ display: "inline-block", width: "100px" }}></span>
                    <div >
                    <img src={item?.image} alt="" width="200px" height="auto"/>
                    </div>
                    </div>
                    </li>   
        )
      })

  return (
  <>
      <h1 className="justify-content-center">Full News Coverage</h1> 
      <hr></hr>
      <ul>
            {list}
      </ul>

  </>
  );
}

export default FullNews;