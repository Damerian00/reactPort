import React from 'react'


function Featured({ChangeSrc}) {
    const [FeaturedSrc, setFeaturedSrc] = useState ('assets/images/miro_ss.png')

    const ChangeSrc = event => {
    
      props.setFeaturedSrc(event.target.src)
    }
    
    
    return (
       
    <section className="featured">
    <img className="starred" src = {FeaturedSrc}  alt="Featured"/>
    </section>
    )



}

export default Featured
