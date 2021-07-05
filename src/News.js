import Moment from "react-moment";
//import Webpage from "./Webpage";
import { Link } from "react-router-dom";

const News = (props) => {

 window.scrollTo(0, 0)

  const articles = (props, counter) => {
    return (
      <>
        <li>
        <div style={{ border: "1px solid red",flexDirection: "row", display: "flex", height: "150px"}}>
        <div style={{width:"78%"}}>
            <a href={props?.news?.articles?.[counter]?.url} ><h4> News: {props?.news?.articles?.[counter]?.title}</h4></a>
            <span style={{ display: "block", width: "20px" }}></span>
            <p style={{fontSize :"12px"}}> 
            Source: {props?.news?.articles?.[counter]?.source?.name}
            <span style={{ display: "inline-block", width: "10px" }}></span>
            .
            <span style={{ display: "inline-block", width: "5px" }}></span>
            Published:
            <span style={{ display: "inline-block", width: "5px" }}></span>
            {<Moment fromNow>{props?.news?.articles?.[counter]?.publishedAt}</Moment>}
            <span style={{ display: "inline-block", width: "150px" }}></span>
            </p>
        </div>
        <div style={{border: "1px solid #e3dcdc",width:"22%" }}>
            <img src={props?.news?.articles?.[counter]?.image} alt="" width="100%" height="100%" style={{borderRadius:"10px"}} />
        </div>
        </div>
        </li> 
      </>
    );
  };

  return (
    <>
      <div>
        <h2>Headlines <span style={{fontWeight: "normal"}}>({((props?.url.slice(props?.url.lastIndexOf('=') + 1).split('+')).map(item=>(item.charAt(0).toUpperCase()+item.substr(1)))).join(" ")})</span></h2>
      </div>
      <div style={{ border: "1px solid #e3dcdc",borderRadius:"10px" , alignContent:"flex-start", justifyContent:"start-end", flexFlow: "column wrap", display:"flex"}}>
          <ul>
              {articles(props, 0)}
              {articles(props, 1)}
          </ul>
        <div style={{ border: "1px solid #e3dcdc", color:"blue"}}>
          <Link to={{pathname: "/headlines/FullNews/", data: { props } }}>
           <h4>View Full Coverage</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default News;
