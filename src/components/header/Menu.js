import react, { useRef, useEffect } from 'react';

import { business, applications, products, latest, services, shop, more, languages, mobile } from './MenuOptions';
import uk from '../../images/united-kingdom.png'
import jp from '../../images/japan.png'
import cn from '../../images/china.png'

function getFlag(f) {
    let flag;
    switch (f) {
        case 'EN':
            flag = uk;
            break;
        case 'JP':
            flag = jp;
            break;
        case 'CN':
            flag = cn;
            break;
        default:
            flag = null;
    }

    return flag
}

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
        case 'more':
            data = more;
            break;
        case 'languages':
            data = languages;
            break;
        case 'mob':
            data = mobile;
            break;
        default:
            data = null;
    }

    if ((si !== 'search' && si !== 'languages') && data !== null) {
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
    } else if (si === 'languages') {
        const content = data.map((r, i) => <li key={i}><img src={getFlag(r)} alt={r} />{r}</li>)

        return <ul>{content}</ul>
    } else {
        return <ul><li><input type="text" className="search" /></li></ul>
    }
    
}

const setPlacement = (menuWidth, linkWidth, linkPosition) => {
    if (menuWidth === 0) {
        return 0
    }
    return linkPosition - (menuWidth / 2) + (linkWidth / 2) - 5;
}

export const Menu = ({ selectedItem, triggerMenu, linkWidth, linkPosition, callback }) => {
    const Menu = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                (Menu.current && triggerMenu && !Menu.current.contains(e.target))
            ) {
                callback()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [triggerMenu, callback])

    let size;
    const desktopWidth = window.innerWidth;

    if (desktopWidth < 992) {
        size = 0
    } else if (Menu.current) {
        size = Menu.current.clientWidth
    }

    return (
        <div className="menuContainer" style={{ position: 'relative', marginLeft: setPlacement(size ? size : 0, linkWidth, linkPosition) }}>
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