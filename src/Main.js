import React from 'react'
import { Route,Switch,Redirect} from "react-router-dom";
import Webpage from './Webpage'
// import Home from './Home';
import Headlines from './Headlines';
import About from './About';
import FullHighlightsList from './FullHighlightsList';
import FullNews from './FullNews';

function Main(props) {
    const queryStr = props.queryStr;
    return (
        <main>
            <Switch>
                {/* <Route exact path={Webpage.home} component={Headlines}/> */}
                <Route exact path={Webpage.home} render={props=><Headlines {...props} data={queryStr}/>}/>
                <Route exact path={Webpage.headlines} component={Headlines}/>
                <Route exact path={Webpage.highlights} component={FullHighlightsList}/>
                <Route exact path={Webpage.news} component={FullNews}/>
                <Route path={Webpage.about} component={About}/>
                <Redirect to={Webpage.home} />
            </Switch>
        </main>
    )
}

export default Main;