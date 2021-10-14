import React from 'react'
import Form from './Form';
import Nav from "./Nav";

function Header() {
    return (
        <header>
        <div className = "off-right">
        <div className="brand">
            <h1>Patrick Price</h1>
            <p>Web Developer</p>
        </div>
        <Nav />
       <Form />
        </div>
    </header>
    )
}

export default Header
