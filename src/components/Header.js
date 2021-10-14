import React from 'react'
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Header() {
    return (
        <Router>
        <header>
        <div className = "off-right">
        <div className="brand">
            <h1>Patrick Price</h1>
            <p>Web Developer</p>
           
        </div>
        <Switch>
        <Route exact path="/reactPort" component={Nav}/>
        </Switch>
       
        </div>
    </header>
    </Router>
    )
}

export default Header


