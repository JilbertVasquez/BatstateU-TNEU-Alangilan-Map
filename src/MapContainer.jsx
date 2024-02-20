import './MapContainer.css'
import FloorContainer from './FloorContainer'
import React, { useState, useRef } from 'react';
import CICSBuilding from './CICSBuilding';



function MapContainer({showFloorContainer, backgroundImage, showFloor, isCICSBuilding, isCEAFABuilding}) {

    // const [backgroundImage, setBackgroundImage] = useState('');

    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };

    const [isvideoEnded, setVideoEnded] = useState();

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };
    
    return (
        // <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        //     {showFloor && showFloorContainer && <FloorContainer />}
        //     {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        // </div>

        // <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className='mapContainer'>
            {isCEAFABuilding && <video src="src\assets\ifbread.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isCICSBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            { isCICSBuilding && <p>HELLO</p>}
            <div className='buildingSection'>
                {isvideoEnded && showFloor && showFloorContainer && <CICSBuilding />}
            </div>
            {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        </div>
    )
}


export default MapContainer