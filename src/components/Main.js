import React, { useState } from 'react'
import Aboutme from './Aboutme';
import Featured from './Featured';
import WorkAside from './WorkAside';
/* put setstate hook here to store set Featured*/

function Main() {
    const [featuredSrc, setFeaturedSrc] = useState (`${process.env.PUBLIC_URL}/assets/images/miro_ss.png`)
    return (
        <main>
        <Aboutme />
        <Featured featuredSrc = {featuredSrc}/>
        <WorkAside setFeaturedSrc = {setFeaturedSrc}/>
    </main>
    )
}

export default Main
