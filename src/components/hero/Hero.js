import react from 'react';
import Fade from 'react-reveal/Fade';

export const Hero = () => {
    return (
        <div className="h-100 home">
            <div className="container h-75">
                <div className="row h-100">
                    <div className="col h-100 d-flex flex-column justify-content-center align-items-center">
                        <Fade top><h1>We are <span style={{ color: '#EA7600' }}>Oxford Instruments.</span></h1></Fade>
                        <Fade top delay={200}><h2 style={{ width: '100%', maxWidth: '600px', marginBottom: '15px' }}>Leading provider of high technology products and services to the world's leading industrial companies and scientific research communities.</h2></Fade>
                        <Fade top delay={400}><a className="big button" href="#aboutUs">Explore</a></Fade>
                    </div>
                </div>
            </div>
            <div className="col h-25 hero"></div>
        </div>
    )
}