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
        <div style={{border: "1px solid red", flexDirection: "row", display: "flex", height: "270px"}}>
        <div style={{width:"70%"}}>
            <h4> Match: {props?.highlights?.[counter]?.title}</h4>
            <span style={{ display: "block", width: "20px" }}></span>
            <p style={{fontSize:"12px"}}>
            Competition: {props?.highlights?.[counter]?.competition?.name}
            <span style={{ display: "inline-block", width: "10px" }}></span>
            .
            <span style={{ display: "inline-block", width: "5px" }}></span>
            Published:
            <span style={{ display: "inline-block", width: "5px" }}></span>
            {<Moment fromNow>{props?.highlights?.[counter]?.date}</Moment>}
            <span style={{ display: "inline-block", width: "550px" }}></span>
            </p>
        </div>
        <div style={{border: "1px solid #e3dcdc", width:"30%",borderRadius:"10px", position:"relative"  }}>
        <div style={{height:"100%" }}>
        {/* <img src={props?.highlights?.[counter]?.thumbnail} alt="" width="100%" height="100%" style={{borderRadius:"10px"}} /> */}
            <iframe
                src={props?.highlights?.[counter]?.embed?.match(urlRegex)[1]}
                frameBorder="0"
                width="100%"
                height="100%"
                alt=""
                allow="autoplay; fullscreen"
                title="This is a unique title"
               
            ></iframe>
            </div>
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
      <div style={{ border: "1px solid #e3dcdc", borderRadius:"10px", alignContent:"flex-start", justifyContent:"start-end", flexFlow: "column wrap", display:"flex"}}>
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
