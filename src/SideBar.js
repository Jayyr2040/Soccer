import React from 'react'

const SideBar = (props) => {




    return(
        <div style={{ border:"1px solid #e3dcdc", width:"10%"}}>
            <div  className="sidebar" tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}} onClick={props.handleTop}>Top Stories</div>
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}} onClick={props.handleFave}>
            <div className="sidebar">Favourites</div>
            </div>
        </div>


    )
}

export default SideBar