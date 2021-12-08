import react, { useState } from 'react';

import { Menu } from './Menu';

import logo from '../../images/logo.png'

export const Header = () => {
    const [selected, setSelected] = useState(null);
    return (
        <header>
            <div className="nav">
                <div className="container">
                    <div className="row justify-content-between align-items-center g-0 pt-5 pb-5">
                        <div className="col-4 col-lg-2 logo"><img src={logo} alt="Oxford Instruments" /></div>
                        <div className="col-6 items justify-content-between">
                            <div 
                                onClick={() => setSelected('business')}
                            >
                                <div className={`${selected === 'business' ? 'selected' : ''}`}>Businesses <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div>
                                <div>Applications <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div>
                                <div>Products <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div>
                                <div>Latest <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div>
                                <div>Services <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div>
                                <div>Shop <i className="fas fa-chevron-down" /></div>
                            </div>
                        </div>
                        <div className="col-5 col-lg-2 more-buttons d-flex justify-content-between">
                            <button className="mob-menu"><i className="fas fa-bars" /></button>
                            <button><i className="fas fa-ellipsis-v" /></button>
                            <button><i className="fas fa-globe-europe" /></button>
                            <button><i className="fas fa-search" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Menu
                    selectedItem={selected}
                />
            </div>
        </header>
    )
};