import './MapContainer.css'
import FloorContainer from './FloorContainer'
import React, { useState, useRef } from 'react';
import CICSBuilding from './CICSBuilding';

function MapContainer({showFloorContainer, backgroundImage, showFloor}) {

    // const [backgroundImage, setBackgroundImage] = useState('');

    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };
    
    return (
        // <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        //     {showFloor && showFloorContainer && <FloorContainer />}
        //     {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        // </div>

        <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            {showFloor && showFloorContainer && <CICSBuilding />}
            {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        </div>
    )
}


export default MapContainer