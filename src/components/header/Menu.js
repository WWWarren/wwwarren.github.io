import react, { useRef } from 'react';

import { business, applications, products, latest, services, shop } from './MenuOptions';

const renderContent = (si) => {
    let data;
    switch (si) {
        case 'business':
            data = business;
            break;
        case 'applications':
            data = applications;
            break;
        case 'products':
            data = products;
            break;
        case 'latest':
            data = latest;
            break;
        case 'services':
            data = services;
            break;
        case 'shop':
            data = shop;
            break;
        default:
            data = null;
    }

    const result = data.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/3)
        
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }
        
        resultArray[chunkIndex].push(item)
        
        return resultArray
    }, []);

    const content = result.map((r, i) => {
        const item = <ul key={i}>{r.map(c => <li key={c}>{c}</li>)}</ul>
        return item
    })

    return content
}

const setPlacement = (menuWidth, linkWidth, linkPosition) => {
    return linkPosition - (menuWidth / 2) + (linkWidth / 2) - 5;
}

export const Menu = ({ selectedItem, triggerMenu, linkWidth, linkPosition }) => {
    const Menu = useRef(null);
    return (
        <div style={{ position: 'relative', marginLeft: setPlacement(Menu.current ? Menu.current.clientWidth : 0, linkWidth, linkPosition) }}>
            <div 
                className={`
                    ${'header-menu'}
                    ${triggerMenu ? 'showMenu' : ''}
                `}
                ref={Menu}
            >
                {renderContent(selectedItem)}    
            </div>
        </div>
    )
}