import Moment from "react-moment";
import Webpage from "./Webpage";
import { Link } from "react-router-dom";

const News = (props) => {
  const Webpage1 = Webpage.news;
  console.log(Webpage1);
  console.log(props);

  const articles = (props, counter) => {
    return (
      <>
      <li>
        <div style={{ flexDirection: "row", display: "flex", height: "wrap" }}>
        <a href={props?.news?.articles?.[counter]?.url}><h4> News: {props?.news?.articles?.[counter]?.title}</h4></a>
        <span style={{ display: "inline-block", width: "50px" }}></span>
        <h4> Source: {props?.news?.articles?.[counter]?.source?.name}</h4>
        <span style={{ display: "inline-block", width: "50px" }}></span>
        <h4>
          Published:{" "}
          {<Moment fromNow>{props?.news?.articles?.[counter]?.publishedAt}</Moment>}
        </h4>
        <span style={{ display: "inline-block", width: "100px" }}></span>
        <div >
        <img src={props?.news?.articles?.[counter]?.image} alt="" width="200px" height="auto"/>
        </div>
        </div>
      </li>   
      </>
    );
  };

  return (
    <>
      <div>
        <h2>Headlines</h2>
      </div>
      <div style={{ border: "1px solid #e3dcdc",borderRadius:"10px" }}>
        <ul>
          {articles(props, 0)}
          {articles(props, 0)}
        </ul>
        <div>
          <Link to={{pathname: "/headlines/FullNews/", data: { props } }}>
           <h4>View Full Coverage</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default News;
