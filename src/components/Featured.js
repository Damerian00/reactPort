import React, {useState} from 'react'


function Featured({featuredSrc}) {
    

    // const ChangeSrc = event => {
    
    //   props.setFeaturedSrc(event.target.src)
    // }
    
    
    return (
       
    <section className="featured">
    <img className="starred" src = {featuredSrc}  alt="Featured"/>
    </section>
    )



}

export default Featured
