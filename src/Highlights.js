import Moment from "react-moment";
import Webpage from "./Webpage";
import { Link } from "react-router-dom";

const Highlights = (props) => {
  const Webpage1 = Webpage.highlights;
  console.log(Webpage1);
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
        <div >
                <iframe
                    src={props?.highlights?.[counter]?.embed?.match(urlRegex)[1]}
                    frameBorder="0"
                    width="300"
                    height="200"
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
        <h2>Football highlights</h2>
      </div>
      <div style={{ border: "1px solid #e3dcdc", borderRadius:"10px" }}>
        <ul>
          {articles(props, 0)}
          {articles(props, 1)}
          {articles(props, 2)}
        </ul>
        <div><span style={{ display: "inline-block", width: "50px" }}></span>
          <Link to={{pathname: "/headlines/FullHighlightsList/", data: { props } }}>
           <h4>View Full Highlights list</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlights;
