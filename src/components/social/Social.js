import react from 'react';

import social1 from '../../images/social-img1.jpeg'
import social2 from '../../images/social-img2.jpg'

export const Social = () => {
    return (
        <div className="social">
            <div className="spacer-darkblue" />
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-6 socialMedia">
                        <h3>Join The Conversation.</h3>
                        <div className="socialRow">
                            <div><i class="fab fa-facebook-f"></i></div>
                            <div style={{ background: `url(${social1})` }} />
                            <div><i class="fab fa-twitter"></i></div>
                        </div>
                        <div className="socialRow">
                            <div style={{ background: `url(${social2})` }} />
                            <div><i class="fab fa-instagram"></i></div>
                            <div><i class="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                    <div className="col-6 sharePrice">
                        <h3>Investor Relations</h3>
                        <p className="price">2,355.02p</p>
                        <p className="change">+15.01p</p>
                        <small>Latest share price - 06 December 2021 at 13:35</small>
                        <button>See more investor information</button>
                    </div>
                </div>
            </div>
            <div className="spacer-lightblue" />
        </div>
    )
}