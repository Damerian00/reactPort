import React from 'react'
import Carousel from './Carousel'

function WorkAside({setFeaturedSrc}) {
    return (
        <aside id="work">
        <Carousel setFeaturedSrc = {setFeaturedSrc}/>
        </aside>
    )
}

export default WorkAside
