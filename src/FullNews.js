import React from 'react';
import Moment from 'react-moment';

function FullNews(props) {
    console.log("Full News Coverage",props.location.data?.props.news);
    window.scrollTo(0, 0)

    let list = (props.location.data?.props.news.articles).map((item,index) => {
        return (
                    <div key={index} style={{display: "flex",flexWrap: "wrap",flexDirection: "row", borderRadius:"10px",border: "1px solid #e3dcdc", width: "48%", height: "150px", marginBottom: "1rem", marginRight: "1em"}}>
                    <div style={{width:"69%",marginTop: "10px"}}>
                    <a href={item?.url}><span> News: {item?.title}</span></a>
                    <span style={{ display: "block", marginBottom: "50px" }}></span>
                    <p style={{color:"grey", fontSize :"12px"}}> 
                    Source: {item?.source?.name}
                    <span style={{ display: "inline-block", width: "10px" }}></span>
                    .
                    <span style={{ display: "inline-block", width: "5px" }}></span>
                     Published:
                     <span style={{ display: "inline-block", width: "5px" }}></span>
                    {<Moment fromNow>{item?.publishedAt}</Moment>}
                    </p>
                    </div>
                    <div style={{border: "1px solid #e3dcdc",width:"30%" }}>
                    <img src={item?.image} alt=""  width="100%" height="100%" style={{borderRadius:"10px"}}/>
                    </div>
                    </div>
  
        )
      })

  return (
  <>
      <h3>Full News Coverage</h3> 
      <hr></hr>
      {/* <ul>
            {list}
      </ul> */}
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", height: 'calc(200px * 10 + 10rem)', alignContent: "flex-start"}}>
          {list}
      </div>

  </>
  );
}

export default FullNews;