import './MapContainer.css'
import FloorContainer from './FloorContainer'
import React, { useState, useRef } from 'react';
import CICSBuilding from './CICSBuilding';
import CEAFABuilding from './CEAFABuilding';
import CITBuilding from './CITBuilding';
import RGRBuilding from './RGRBuilding';
import SCSBuilding from './SCSBuilding';
import GYMBuilding from './GYMBuilding';
import SteerHubBuilding from './SteerHubBuilding';



function MapContainer(  {showFloorContainer, backgroundImage, showCEAFABuilding, showCICSBuilding, showCITBuilding, showRGRBuilding, showSCSBuilding, showGYMBuilding, showSteerHubBuilding,  isCampusMap, isCICSBuilding, isCEAFABuilding, isCITBuilding, isRGRBuilding, isSCSBuilding, isGYMBuilding, isSteerHubBuilding, handleVideoEnd, isvideoEnded}) {

    // const [backgroundImage, setBackgroundImage] = useState('');

    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };

    
    
    return (
        // <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        //     {showFloor && showFloorContainer && <FloorContainer />}
        //     {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        // </div>

        // <div className='mapContainer' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className='mapContainer'>
            {isCampusMap && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isCEAFABuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isCICSBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isCITBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isRGRBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isSCSBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isGYMBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            {isSteerHubBuilding && <video src="src\assets\summer.mp4" autoPlay className='MapVideoWay' onEnded={handleVideoEnd}></video>}
            <div className='buildingSection'>
                {isvideoEnded && showCEAFABuilding && showFloorContainer && <CEAFABuilding />}
                {isvideoEnded && showCICSBuilding && showFloorContainer && <CICSBuilding />}
                {isvideoEnded && showCITBuilding && showFloorContainer && <CITBuilding />}
                {isvideoEnded && showRGRBuilding && showFloorContainer && <RGRBuilding />}
                {isvideoEnded && showSCSBuilding && showFloorContainer && <SCSBuilding />}
                {isvideoEnded && showGYMBuilding && showFloorContainer && <GYMBuilding />}
                {isvideoEnded && showSteerHubBuilding && showFloorContainer && <SteerHubBuilding />}
            </div>
            {/* <img src="src\assets\bsu-alangilan-siteplan.jpg" alt="AlangilanCampus"/> */}
        </div>
    )
}


export default MapContainer