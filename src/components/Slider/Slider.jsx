import React from 'react'
import slider from '../../assents/img/slider.png'
import './Slider.scss'

function Slider() {
    return (
        <div className='Slider'>
     <center>
     <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">




                        <img src={slider} className="d-block w-85" alt="" />





                    </div>
                    <div className="carousel-item">





                        <img src={slider} className="d-block w-85" alt="" />





                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-85" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
     </center>

            {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/// */}
<div className="hero">
<h2 className='hero__text'>
Shop The Latest
</h2>
</div>

        </div>


    )
}

export default Slider