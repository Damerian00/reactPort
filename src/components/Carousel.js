import React from 'react'
import CarouselSlide from './CarouselSlide'
import imageData from '../imageData'


function Carousel() {
    return (
        <nav className="sites">
        <h2>Samples of my Work</h2>
        <span className ="prevSlide">←</span>
        <span className="nextSlide">→</span>
        <section className="slideWrapper">
            <ul className="slideHolder">
                <li className="slide initial" data-slide="0">
                    <ul>
                    <CarouselSlide imageData={imageData} i={0} n={3}/>
                    </ul>
                </li>
                <li className = "slide" data-slide="1">
                    <ul>    
                    <CarouselSlide imageData={imageData} i={3} n={6}/>
                    </ul>
                </li>
                <li className="slide" data-slide="2">
                    <ul>
                    <CarouselSlide imageData={imageData} i={6} n={9}/>
                    </ul>
                </li>
            </ul>
        </section>
        </nav>
    )
}

export default Carousel
