import react from 'react';
import Slide from 'react-reveal/Slide';

const renderContent = () => {
    const data = ['Andor', 'Na', 'Magnets', 'Company4', 'Company 5', 'X-Ray', 'Oi', 'Nano']

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

export const Menu = ({ selectedItem }) => {
    console.log(!!selectedItem);
    return (
        <div style={{ position: 'relative' }}>
            {
                !!selectedItem &&
                <Slide
                    top
                    duration={400}
                >
                    <div 
                        className='header-menu'
                    >
                        {renderContent()}    
                    </div>
                </Slide>
            }
        </div>
    )
}