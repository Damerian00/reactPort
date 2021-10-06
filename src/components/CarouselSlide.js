import React from 'react'



function CarouselSlide({imageData, i, n}) {
 const images = imageData.length > 3? imageData.slice(i, n): imageData;
    return (
       <>
        {images.map((image) => (
        <li>
        <section data-pos ={image.id} key={`${image.id}abc`}>
        <img className ="picPos" src= {image.imgSrc} alt={image.name} />
            <div className="content">
                <h3>{image.name}</h3>
                <p>{image.descr}</p>
                <div className="links">
                    <span>
                    <a href ={image.repoLink} target="_blank" title="View Repo" >📂</a>
           </span>
        <span>
                <a href={image.demoLink} target="_blank" title="View Demo">🔍</a>
            </span>
        </div>
        </div>
        </section>
    </li>
    ))}
    </>
    )
}

export default CarouselSlide

