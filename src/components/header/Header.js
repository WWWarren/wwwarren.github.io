import react, { useState, useRef, useEffect } from 'react';

import { Menu } from './Menu';

import logo from '../../images/logo.png'

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

export const Header = () => {
    const [selected, setSelected] = useState(null);
    const businessMenu = useRef(null);
    const applicationsMenu = useRef(null);
    const productssMenu = useRef(null);
    const latestMenu = useRef(null);
    const servicesMenu = useRef(null);
    const shopMenu = useRef(null);
    const optionsMenu = useRef(null);
    const languageMenu = useRef(null);
    const searchMenu = useRef(null);

    const [dimensions, setWidth] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    useEffect(() => {
        setSelected(null)
    }, [dimensions])

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
            case 'more':
                getOffset = optionsMenu;
                break;
            case 'languages':
                getOffset = languageMenu;
                break;
            case 'search':
                getOffset = searchMenu;
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
                                onClick={selected !== 'business' ? () => selectItem('business') : () => {}}
                                ref={businessMenu}
                            >
                                <div className={`${selected && selected.id === 'business' ? 'selected' : ''}`}>Businesses <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={selected !== 'applications' ? () => selectItem('applications') : () => {}}
                                ref={applicationsMenu}
                            >
                                <div className={`${selected && selected.id === 'applications' ? 'selected' : ''}`}>Applications <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={selected !== 'products' ? () => selectItem('products') : () => {}}
                                ref={productssMenu}
                            >
                                <div className={`${selected && selected.id === 'products' ? 'selected' : ''}`}>Products <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={selected !== 'latest' ? () => selectItem('latest') : () => {}}
                                ref={latestMenu}
                            >
                                <div className={`${selected && selected.id === 'latest' ? 'selected' : ''}`}>Latest <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={selected !== 'services' ? () => selectItem('services') : () => {}}
                                ref={servicesMenu}
                            >
                                <div className={`${selected && selected.id === 'services' ? 'selected' : ''}`}>Services <i className="fas fa-chevron-down" /></div>
                            </div>
                            <div
                                onClick={selected !== 'shop' ? () => selectItem('shop') : () => {}}
                                ref={shopMenu}
                            >
                                <div className={`${selected && selected.id === 'shop' ? 'selected' : ''}`}>Shop <i className="fas fa-chevron-down" /></div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 more-buttons d-flex justify-content-between">
                            <button className="mob-menu"><i className="fas fa-bars" /></button>
                            <button
                                onClick={selected !== 'more' ? () => selectItem('more') : () => {}}
                                ref={optionsMenu}
                                className={`${selected && selected.id === 'more' ? 'selectedBtn' : ''}`}
                            >
                                <i className="fas fa-ellipsis-v" />
                            </button>
                            <button
                                onClick={selected !== 'languages' ? () => selectItem('languages') : () => {}}
                                ref={languageMenu}
                                className={`${selected && selected.id === 'languages' ? 'selectedBtn' : ''}`}
                            >
                                <i className="fas fa-globe-europe" />
                            </button>
                            <button
                                onClick={selected !== 'search' ? () => selectItem('search') : () => {}}
                                ref={searchMenu}
                                className={`${selected && selected.id === 'search' ? 'selectedBtn' : ''}`}
                            >
                                <i className="fas fa-search" />
                            </button>
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
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='applications'
                    triggerMenu={selected && selected.id === 'applications'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='products'
                    triggerMenu={selected && selected.id === 'products'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='latest'
                    triggerMenu={selected && selected.id === 'latest'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='services'
                    triggerMenu={selected && selected.id === 'services'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='shop'
                    triggerMenu={selected && selected.id === 'shop'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='more'
                    triggerMenu={selected && selected.id === 'more'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='languages'
                    triggerMenu={selected && selected.id === 'languages'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
                <Menu
                    selectedItem='search'
                    triggerMenu={selected && selected.id === 'search'}
                    linkWidth={(selected && selected.width) || 0}
                    linkPosition={(selected && selected.position) || 0}
                    callback={() => setSelected(null)}
                />
            </div>
        </header>
    )
};