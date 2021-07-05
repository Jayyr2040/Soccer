import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'

function Header() {

const colorArr = ["red","orange","#fcf22d","green","blue","indigo","violet","black"];
const myTitle = "MySoccer";
const titleArr = myTitle.split("")
const titleColored = titleArr.map((item,index) => {
        return ( <span style={{color: colorArr[index]}} key={index}>{item}</span>)    })

    return (
        <>
        {/* <div className="nav"> */}
            <div className="nav-item"><span className="nav-logo">
                <Link to={Webpage.home} className="titleLink">
                    {titleColored}
                </Link>
                </span>
            </div>
          {/*  <div className="nav-item">
                <Link to={Webpage.headlines} className="titleLink">
                    Headlines
                </Link>
            </div> */}
            <div className="nav-item">
                <Link to={Webpage.about} className="titleLink">
                    About
                </Link>
            </div>
        </>
    );
}

export default Header