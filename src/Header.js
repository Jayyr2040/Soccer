import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'


function Header() {
    return (
        <div className="nav">
            <div className="nav-item"><span className="nav-logo">
                <Link to={Webpage.home}>
                    MySoccer
                </Link>
                </span>
            </div>
            <div className="nav-item">
                <Link to={Webpage.headlines}>
                    Headlines
                </Link>
            </div>
            <div className="nav-item">
                <Link to={Webpage.about}>
                    About
                </Link>
            </div>
        </div>
    );
}

export default Header