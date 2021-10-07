import React, {useState} from 'react';
import CarouselSlide from './CarouselSlide'
import {ImageData} from '../ImageData'

function Carousel({setFeaturedSrc}) {
    const [current, setCurrent] = useState(0)
    const slideArray = [
        <CarouselSlide imageData={ImageData} i={0} n={3}/>,
        <CarouselSlide imageData={ImageData} i={3} n={6}/>,
        <CarouselSlide imageData={ImageData} i={6} n={9}/>
    ] 
    const length = slideArray.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0: current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    }
    return (
        <nav className="sites">
        <h2>Samples of my Work</h2>
        <span className ="prevSlide" onClick={prevSlide}>←</span>
        <span className="nextSlide"onClick={nextSlide}>→</span>
        <section className="slideWrapper">
            <ul className="slideHolder">
            
            {slideArray.map((slide, index) => {
          return (
          <li className={index === current ? 'slide active' : 'slide'} key={index}> 
          
                    <ul>
                    <CarouselSlide imageData={ImageData} i={3 * index} n={3 * index + 3} setFeaturedSrc = {setFeaturedSrc}/>
                    </ul>
         </li>
         )  
        })}
         
            </ul>
        </section>
        </nav>
    )
}

export default Carousel
