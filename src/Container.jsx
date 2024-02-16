import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

import React, { useState } from 'react';

function Container() {

    const [showFloorContainer, setShowFloorContainer] = useState(false);
    const [lastClickedIndex, setLastClickedIndex] = useState();
    
    const toggleFloorContainer = (index) => {
        setShowFloorContainer(true);

        if (lastClickedIndex === index) {
            setLastClickedIndex(null);
            setShowFloorContainer(false);
        } 
        else {
            setLastClickedIndex(index);
        }
    };

    return(
        <div className='fullContainer'>
            <BuildingContainer toggleFloorContainer={toggleFloorContainer}/>
            <MapContainer showFloorContainer={showFloorContainer}/>

        </div>
    );
}

export default Container