import react from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from '../../images/slider-img1.png'
import slider2 from '../../images/slider-img2.jpg'
import slider3 from '../../images/slider-img3.jpg'

export const WhatGoingOn = () => {
    return (
        <div className="h-75 whatGoingOn">
            <div className="container h-100">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h3>What’s going on at OI?</h3>
                    </div>
                </div>
                <div className="row g-0 align-items-center carousel">
                    <div className="col-1 edges d-none d-md-block" style={{ background: 'linear-gradient(90deg, rgba(17, 17, 17, 0.00520833) 0%, #333333 27.73%)' }} />
                    <div className="col-12 col-md-10 h-100">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            infiniteLoop
                            centerMode
                            renderArrowPrev={(onClickHandler, hasPrev, label) => 
                                hasPrev && (
                                    <button 
                                        type="button" 
                                        onClick={onClickHandler} 
                                        title={label}
                                        className="prev-arrow"
                                    >
                                        <i class="fas fa-chevron-left"></i>
                                    </button>
                                )   
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button 
                                        type="button" 
                                        onClick={onClickHandler} 
                                        title={label}
                                        className="next-arrow"
                                    >
                                        <i class="fas fa-chevron-right"></i>
                                    </button>
                                )
                            }
                        >
                            <div className="wrapper" style={{ background: `url(${slider1})` }}>
                                <div className="content">
                                    <h4><strong>AZtecFlex</strong><br />Anyone | Anywhere | Anytime</h4>
                                    <p>Giving you the full power of the AZtec suite</p>
                                    <button>Learn More</button>
                                </div>
                            </div>
                            <div className="wrapper" style={{ background: `url(${slider2})` }}>
                                <div className="content">
                                    <h4>NEW Benchtop Confocal</h4>
                                    <p>Fast. Easy. Compact. Affordable.</p>
                                    <button>Learn more about BC43</button>
                                </div>
                            </div>
                            <div className="wrapper" style={{ background: `url(${slider3})` }}>
                                <div className="content">
                                    <h4>Oxford Instruments joins Chicago Quantum Exchange (CQE)</h4>
                                    <p>An intellectual hub for quantum information science and engineering.</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-1 edges d-none d-md-block" style={{ background: 'linear-gradient(90deg, rgba(17, 17, 17, 0.00520833) 0%, #333333 27.73%)', transform: 'rotate(-180deg)' }} />
                </div>
            </div>
        </div>
    )
}


