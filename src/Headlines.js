import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";

// let isFirstLoad = true;
function Headlines() {
  const [highlights, setHighlights] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [isFirstLoad, setFirstLoad] = React.useState(true);
  const [isFirstLoadNews, setFirstLoadNews] = React.useState(true);

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

  return (
    <>
    {/*   <h1>Daily Round Up</h1> */}
      {/* <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price </th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody> */}
       
        <div style={{flexFlow: "row wrap", display:"flex" ,alignItems:"stretch", alignContent:"space-between", justifyContent:"center"}}>
        <div style={{ border:"1px solid #e3dcdc", width:"10%"}}>
          <div style={{paddingTop: "30px", border:"1px solid #e3dcdc"}}>Top Stories</div>
          <div style={{paddingTop: "50px", border:"1px solid #e3dcdc"}}>
          <div>Manchester United</div>
          </div>
          
        </div>
        <div style={{ border:"1px solid #e3dcdc", width:"80%"}}>
        <ApiCall url={WebUrl.news} handleApiCall={handleApiCallNews} isFirstLoad={isFirstLoadNews}/>
        <News news={news}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
  <Highlights highlights={highlights}/>
       {/*  </tbody>
      </table> */}
      </div>
      </div>
    </>
  );
}

export default Headlines;
