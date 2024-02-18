import './FloorContainer.css'


import React, { useState } from 'react';

function FloorContainer() {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return(
        <div className={isVisible ? 'floorContainer' : 'floorContainer-hidden'}>
            <button onClick={toggleVisibility}>CLOSE</button>
        </div>
    )
}

export default FloorContainer