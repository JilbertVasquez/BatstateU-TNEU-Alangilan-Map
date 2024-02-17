import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

import React, { useState } from 'react';

function Container() {

     // Change Background
    const [backgroundImage, setBackgroundImage] = useState('src/assets/bsu-alangilan-siteplan.jpg');

    const BackgroundColor = [
        'src/assets/Alangilan-CEAFA.jpg',
        'src/assets/Alangilan-CICS.jpg',
        'src/assets/Alangilan-CIT.jpg',
        'src/assets/bsu-alangilan-siteplan.jpg',
        'src/assets/ALANGILAN-GYM-PERS.jpg',
        'src/assets/Alangilan-Research-STEER-Hub.png',
        'src/assets/bsu-alangilan-siteplan.jpg',
        
    ]

    // Toggle Floor Container
    const [showFloorContainer, setShowFloorContainer] = useState(false);
    const [lastClickedIndex, setLastClickedIndex] = useState();

    const [showFloor, setShowFloor] = useState(false);
    
    const toggleFloorContainer = (index) => {
        setShowFloorContainer(true);

        const timer = setTimeout(() => {
            setShowFloor(true);
        }, 5000);

        if (lastClickedIndex === index) {
            setLastClickedIndex(null);
            setShowFloorContainer(false);
            setBackgroundImage('src/assets/bsu-alangilan-siteplan.jpg');
            
            clearTimer(timer);
        } 
        else {
            setLastClickedIndex(index);
            setBackgroundImage(BackgroundColor[index]);

            clearTimer(timer);
            setTimer(timer);
        }

    };



    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };

    return(
        <div className='fullContainer'>
            <BuildingContainer toggleFloorContainer={toggleFloorContainer}/>
            <MapContainer showFloorContainer={showFloorContainer} backgroundImage={backgroundImage} showFloor={showFloor}/>

        </div>
    );
}

export default Container