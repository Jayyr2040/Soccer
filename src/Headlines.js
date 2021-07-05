import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";
import SideBar from "./SideBar";
//import { DataContext } from './App';


// let isFirstLoad = true;
function Headlines(props) {
  //const dataContext = React.useContext(DataContext);
 // console.log("Headlines - query",dataContext.queryStr);
// console.log("Headlines - query",props.data);
  const [highlights, setHighlights] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [isFirstLoad, setFirstLoad] = React.useState(true);
  const [isFirstLoadNews, setFirstLoadNews] = React.useState(true);
  const [newsUrl,setnewsUrl] = React.useState(WebUrl.news);

  const handleApiCall = (data) => {
    setFirstLoad(false);
    console.log("First Load Highlights - ", isFirstLoad);
    setHighlights(data);
  };

  const handleApiCallNews = (data) => {
    setFirstLoadNews(false);
    console.log("First Load News - ", isFirstLoadNews);
    setNews(data);
  };

  const handleTop =()=> {
    setnewsUrl(WebUrl.news);
    console.log("top");
    setFirstLoadNews(true);
  }

  const handleFave =()=> {
    setnewsUrl(WebUrl.news2);
    console.log("fave");
    setFirstLoadNews(true);
  }
 // console.log(newsUrl);

 //if (dataContext.queryStr === "") {console.log("undefined query string")}
 //else {
   
 //console.log("Headlines - query", dataContext.queryStr)
//setFirstLoadNews(true);
//setnewsUrl(dataContext.queryStr);
 //}

// if (props.data === "") {console.log("undefined query string")}
// else {
//   console.log("Headlines - query", props.data);
//   setnewsUrl(props.data);
//setFirstLoadNews(true);
// 
// }

  return (
    <>
        <div style={{flexFlow: "row wrap", display:"flex" ,alignItems:"stretch"}}>
            <SideBar handleTop={handleTop} handleFave={handleFave}/>
            <div style={{ border:"1px solid #e3dcdc", width:"80%"}}>
            <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
            <ApiCall url={props.data === ""? newsUrl:props.data} handleApiCall={handleApiCallNews} isFirstLoad={isFirstLoadNews}/>
            <News news={news}/>
            <span style={{ display: "inline-block", width: "200px" }}></span>
            <Highlights highlights={highlights}/>
            </div>
      </div>
    </>
  );
}

export default Headlines;
