import react, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import aboutUsImg1 from '../../images/aboutus-1.png'
import aboutUsImg2 from '../../images/aboutus-2.png'
import aboutUsImg3 from '../../images/aboutus-3.jpg'

export const AboutUs = () => {
    const [title, setTitle] = useState('Magnets');

    function generateAreas() {
        const data = ['Magnets', 'Plasma', 'X-Ray', 'Tech', 'Support', 'Nano']

        const getNumber = Math.random() * (5 - 0) + 0;
        const roundNumber = Math.ceil(getNumber)
        
        if (data[roundNumber] !== title) {
            setTitle(data[roundNumber]);
        } else {
            generateAreas()
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            generateAreas();
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <>
            <div id="aboutUs" />
            <div className="h-lg-100 aboutUs">
                <div className="container h-100 d-flex flex-column justify-content-between">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 offset-lg-1 order-1">
                            <h3>We Specialise in {title}.</h3>
                            <p> 
                                Our core purpose is to support our customers to address some of the world's most pressing challenges, enabling a greener economy, increased connectivity, improved health and leaps in scientific understanding. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu lacinia turpis. Sed dapibus sed nisl ut cursus. 
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 offset-lg-1 order-2"><Fade right><img src={aboutUsImg1} alt="" /></Fade></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4 offset-lg-1 order-2 order-lg-1"><Fade left><img src={aboutUsImg2} alt="" /></Fade></div>
                        <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2">
                            <h3>We Specialise in You.</h3>
                            <p>
                                We are proud to be recognised as the leaders in what we do and for the difference we make in the world. 
                                Praesent arcu mauris, bibendum nec sapien consectetur, pretium pellentesque nisi. Proin efficitur interdum nulla, non varius nunc sollicitudin sit amet. Maecenas condimentum urna justo, in hendrerit erat varius sed.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 offset-lg-1 order-1">
                            <h3>We Specialise in TBD.</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu lacinia turpis. Sed dapibus sed nisl ut cursus. 
                            Praesent arcu mauris, bibendum nec sapien consectetur, pretium pellentesque nisi. Proin efficitur interdum nulla, non varius nunc sollicitudin sit amet. Maecenas condimentum urna justo, in hendrerit erat varius sed.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 offset-lg-1 order-2"><Fade right><img src={aboutUsImg3} alt="" /></Fade></div>
                    </div>
                </div>
            </div>
        </>
    )
}