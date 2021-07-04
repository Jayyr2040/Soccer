import React from 'react';
import Moment from 'react-moment';

function FullHighlightsList(props) {
    const urlRegex = /(https?:\/\/[^ ]*)/;
    const [highlightSrc,setHighlightSrc] = React.useState(props.location.data?.props.highlights[0].embed);

    const handleChange =(src) => {
        setHighlightSrc(src);
        window.scrollTo(0, 0)
    }

    let list = (props.location.data?.props.highlights).map((item,index) => {
        return (
        <div style={{ border:"1px solid #e3dcdc", width:"20%", margin:"5px", cursor:"pointer",borderRadius:"10px"}} key={index} onClick={()=>handleChange(item.embed)}>
        <div>
        <strong>Match: {item.title}</strong>
        <br></br><small>Competition: {item.competition.name}</small>
        <br></br><small>Published: {<Moment fromNow>{item.date}</Moment>}</small>
        </div>
        <div>
        <img src={item.thumbnail} alt="" width="100%" height="auto"/>
            </div>  
       </div>
        )
      })

  return (
  <>
  <div>
      <div>
            <div style={{textAlign:"center", display:"flex" , flexFlow: "row wrap",justifyContent: "center"}}>
            <div>
                        <h2>Viewer</h2>
                        <iframe
                            src={highlightSrc?.match(urlRegex)[1]}
                            frameBorder="0"
                            width="500"
                            height="500"
                            alt=""
                            allow="autoplay; fullscreen"
                            title="This is a unique title"
                        ></iframe>
            </div>
            </div>   
            <hr></hr>
            <h2 style={{textAlign:"center"}}>Full Highlights List</h2> 
            <div style={{flexFlow: "row wrap", display:"flex" ,alignItems:"stretch", alignContent:"space-between", justifyContent:"center"}}>
                    {list}
            </div>
    </div>
    </div>
  </>
  );
}

export default FullHighlightsList;