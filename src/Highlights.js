import Moment from "react-moment";
//import Webpage from "./Webpage";
import { Link } from "react-router-dom";

const Highlights = (props) => {
 // const Webpage1 = Webpage.highlights;
 // console.log(Webpage1);
  const urlRegex = /(https?:\/\/[^ ]*)/;

  const articles = (props, counter) => {
    return (
      <>
      <li>
        <div style={{ flexDirection: "row", display: "flex", height: "wrap" }}>
        <h3> Match: {props?.highlights?.[counter]?.title}</h3>
        <span style={{ display: "inline-block", width: "50px" }}></span>
        <h4>Competition: {props?.highlights?.[counter]?.competition?.name}</h4>
        <span style={{ display: "inline-block", width: "50px" }}></span>
        <h4>
          Published:{" "}
          {<Moment fromNow>{props?.highlights?.[counter]?.date}</Moment>}
        </h4>
        <span style={{ display: "inline-block", width: "150px" }}></span>
        <div style={{border: "1px solid #e3dcdc", justifyContent:"start-end" }}>
                <iframe
                    src={props?.highlights?.[counter]?.embed?.match(urlRegex)[1]}
                    frameBorder="0"
                    width="auto"
                    height="auto"
                    alt=""
                    allow="autoplay; fullscreen"
                    title="This is a unique title"
                ></iframe>
        </div>
        </div>
      </li>   
      </>
    );
  };

  return (
    <>
      <div>
        <h2>Soccer highlights</h2>
      </div>
      <div style={{ border: "1px solid #e3dcdc", borderRadius:"10px", alignContent:"space-between", justifyContent:"start-end", flexFlow: "row wrap", display:"flex"}}>
        <ul>
          {articles(props, 0)}
          {articles(props, 1)}
          {articles(props, 2)}
        </ul>
        <div style={{ border: "1px solid #e3dcdc", color:"blue"}}>
          <Link to={{pathname: "/headlines/FullHighlightsList/", data: { props } }}>
           <h4>View Full Highlights list</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlights;
