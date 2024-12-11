import { useState } from "react";
import "./carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    return (
        <div className="carousel">
            <FaArrowLeft className="arrow arrow-left" onClick={prevSlide}/>
            {data.map(( item, index) => {
               return <img src={ item.src } alt={ item.alt } key={index} className={ slide === index ? "slide" : "slide slide-hidden"}/> 
            })}
            <FaArrowRight className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_, index) => (
                    <button key={index} 
                    onClick={() => setSlide(index)} 
                    className={`indicator ${slide === index ? "active" : ""}`}>
                    </button>
                ))}
            </span>
        </div>
    );
};

export default Carousel;