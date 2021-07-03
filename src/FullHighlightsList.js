import React from 'react';
import Moment from 'react-moment';

function FullHighlightsList(props) {
    const urlRegex = /(https?:\/\/[^ ]*)/;
    const [highlightSrc,setHighlightSrc] = React.useState(props.location.data?.props.highlights[0].embed);

    const handleChange =(src) => {
        setHighlightSrc(src);
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
  <h1 className="justify-content-center">Viewer</h1>
      <div>
      <div >
                <iframe
                    src={highlightSrc?.match(urlRegex)[1]}
                    frameBorder="0"
                    width="560"
                    height="650"
                    alt=""
                    allow="autoplay; fullscreen"
                    title="This is a unique title"
                ></iframe>
      </div>   
      <hr></hr>
      <h1 className="justify-content-center">Full Highlights List</h1> 
      <div style={{flexFlow: "row wrap", display:"flex" ,alignItems:"stretch", alignContent:"space-between", justifyContent:"center"}}>
            {list}
          </div>
    </div>
  </>
  );
}

export default FullHighlightsList;