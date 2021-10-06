import React, { useState } from 'react'
import Aboutme from './Aboutme';
import Featured from './Featured';
import WorkAside from './WorkAside';
/* put setstate hook here to store set Featured*/

function Main() {
    const [featuredState, setFeaturedState] = useState({});
    return (
        <main>
        <Aboutme />
        <Featured />
        <WorkAside />
    </main>
    )
}

export default Main
