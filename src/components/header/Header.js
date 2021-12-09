import react, { useState, useRef } from 'react';

import { Menu } from './Menu';

import logo from '../../images/logo.png'

export const Header = () => {
    const [selected, setSelected] = useState(null);
    const businessMenu = useRef(null);
    const applicationsMenu = useRef(null);
    const productssMenu = useRef(null);
    const latestMenu = useRef(null);
    const servicesMenu = useRef(null);
    const shopMenu = useRef(null);

    const selectItem = (item) => {
        let getOffset;
        switch (item) {
            case 'business':
                getOffset = businessMenu;
                break;
            case 'applications':
                getOffset = applicationsMenu;
                break;
            case 'products':
                getOffset = productssMenu;
                break;
            case 'latest':
                getOffset = latestMenu;
                break;
            case 'services':
                getOffset = servicesMenu;
                break;
            case 'shop':
                getOffset = shopMenu;
                break;
            default:
                getOffset = null;
        } 
               
        const obj = {
            id: item,
            position: getOffset.current.offsetLeft,
            width: getOffset.current.clientWidth,
        }

        setSelected(obj)
    }

    return (
        <header>
            <div className="nav">
                <div className="container">
                    <div className="row justify-content-between align-items-center g-0 pt-5 pb-5">
                        <div className="col-4 col-lg-2 logo"><img src={logo} alt="Oxford Instruments" /></div>
                        <div className="col-6 items justify-content-between">
                            <div 
                                onClick={() => selectItem('business')}
                                ref={businessMenu}
                            >
                                <div className={`${selected && selected.id === 'business' ? 'selected' : ''}`}>Businesses <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={() => selectItem('applications')}
                                ref={applicationsMenu}
                            >
                                <div className={`${selected && selected.id === 'applications' ? 'selected' : ''}`}>Applications <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={() => selectItem('products')}
                                ref={productssMenu}
                            >
                                <div className={`${selected && selected.id === 'products' ? 'selected' : ''}`}>Products <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={() => selectItem('latest')}
                                ref={latestMenu}
                            >
                                <div className={`${selected && selected.id === 'latest' ? 'selected' : ''}`}>Latest <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={() => selectItem('services')}
                                ref={servicesMenu}
                            >
                                <div className={`${selected && selected.id === 'services' ? 'selected' : ''}`}>Services <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={() => selectItem('shop')}
                                ref={shopMenu}
                            >
                                <div className={`${selected && selected.id === 'shop' ? 'selected' : ''}`}>Shop <i className="fas fa-chevron-down" /></div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 more-buttons d-flex justify-content-between">
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
                    selectedItem='business'
                    triggerMenu={selected && selected.id === 'business'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
                <Menu
                    selectedItem='applications'
                    triggerMenu={selected && selected.id === 'applications'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
                <Menu
                    selectedItem='products'
                    triggerMenu={selected && selected.id === 'products'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
                <Menu
                    selectedItem='latest'
                    triggerMenu={selected && selected.id === 'latest'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
                <Menu
                    selectedItem='services'
                    triggerMenu={selected && selected.id === 'services'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
                <Menu
                    selectedItem='shop'
                    triggerMenu={selected && selected.id === 'shop'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                />
            </div>
        </header>
    )
};