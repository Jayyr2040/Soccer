import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";
import SideBar from "./SideBar";




function Headlines(props) {

  // console.log("Headlines - query", props.data);
 
  const [highlights, setHighlights] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [isFirstLoad, setFirstLoad] = React.useState(true);
  const [isFirstLoadNews, setFirstLoadNews] = React.useState(true);
  const [isFirstLoadSearch, setFirstLoadSearch] = React.useState(true);
  const [newsUrl,setnewsUrl] = React.useState(WebUrl.news);
  const [searchUrl1,setSearchUrl1] = React.useState("");


  const searchUrlArr = props.data;
  let searchUrl = "";
  if (searchUrlArr[0]?.slice(searchUrlArr[0]?.lastIndexOf('=') + 1) === searchUrlArr[1]?.slice(searchUrlArr[1]?.lastIndexOf('=') + 1)){console.log("HEadlines - compare",true);}
  else{console.log("HEadlines - compare",false);searchUrl = searchUrlArr[1];};

  const handleApiCall = (data) => {
      setFirstLoad(false);
     // console.log("First Load Highlights - ", isFirstLoad);
      setHighlights(data);
  };

  const handleApiCallNews = (data) => {
      setFirstLoadNews(false);
    //  console.log("First Load News - ", isFirstLoadNews);
      setNews(data);
  };

  const handleApiCallSearch = (data) => {
      setFirstLoadSearch(false);
     // console.log("First Load Search - ", isFirstLoadSearch);
      setSearch(data);
      setSearchUrl1(searchUrl);
     console.log(searchUrl1)
  };

  const handleTop =()=> {
      setnewsUrl(WebUrl.news);
     // console.log("top");
      setFirstLoadNews(true);
  }

  const handleFave =()=> {
      setnewsUrl(WebUrl.news2);
    //  console.log("fave");
      setFirstLoadNews(true);
  }

  /* const handleManC =()=> {
      setnewsUrl(WebUrl.news4);
      console.log("ManC");
      setFirstLoadNews(true);
  } */

  return (
    <>
        <div style={{flexFlow: "row wrap", display:"flex" ,alignItems:"stretch"}}>
            <SideBar handleTop={handleTop} handleFave={handleFave}/>
            <div style={{ border:"1px solid #e3dcdc", width:"80%"}}>
            <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
            <ApiCall url={newsUrl} handleApiCall={handleApiCallNews} isFirstLoad={isFirstLoadNews}/> 
            <ApiCall url={searchUrl} handleApiCall={handleApiCallSearch} isFirstLoad={isFirstLoadSearch}/>
            <News news={news} url={newsUrl}/>
            <div style={{display:(searchUrl1 === ""? "none": "block")}}>
            <News news={search} url={searchUrl1} />
            </div>
            <span style={{ display: "block", width: "100px" }}></span>
            <Highlights highlights={highlights}/>
            </div>
      </div>
    </>
  );
}

export default Headlines;
