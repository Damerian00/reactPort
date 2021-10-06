import React from 'react'
import Nav from "./Nav";

function Header() {
    return (
        <header>
        <div className = "off-right">
        <div className="brand">
            <h1>Patrick Price</h1>
            <p>Web Coder</p>
        </div>
        <Nav />
        </div>
    </header>
    )
}

export default Header
