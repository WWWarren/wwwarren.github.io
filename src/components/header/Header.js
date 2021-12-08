import react from 'react';

import logo from '../../images/logo.png'

export const Header = () => {
    return (
        <header className="pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-between align-items-center g-0">
                    <div className="col-4 col-lg-2 logo"><img src={logo} alt="Oxford Instruments" /></div>
                    <div className="col-6 nav justify-content-between">
                        <div>Businesses <i class="fas fa-chevron-down" /></div>
                        <div>Applications <i class="fas fa-chevron-down" /></div>
                        <div>Products <i class="fas fa-chevron-down" /></div>
                        <div>Latest <i class="fas fa-chevron-down" /></div>
                        <div>Services <i class="fas fa-chevron-down" /></div>
                        <div>Shop <i class="fas fa-chevron-down" /></div>
                    </div>
                    <div className="col-5 col-lg-2 more-buttons d-flex justify-content-between">
                        <button className="mob-menu"><i class="fas fa-bars" /></button>
                        <button><i class="fas fa-ellipsis-v" /></button>
                        <button><i class="fas fa-globe-europe" /></button>
                        <button><i class="fas fa-search" /></button>
                    </div>
                </div>
            </div>
        </header>
    )
};