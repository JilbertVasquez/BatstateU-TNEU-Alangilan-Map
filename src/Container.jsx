import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

import React, { useState } from 'react';

function Container() {

    // List of Buildings -> Floors -> Rooms
    const buildings = [
        {name: "CEAFA", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "CICS", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105", "Room 106"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "CIT", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "RGR", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
        ]},
        {name: "GYM", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["ICT Offices", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
        ]},
        {name: "STEER HUB", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "STUDENT SERVICES", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
        ]},
    ]

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

    // Building Maps
    const [isCEAFABuilding, setCEAFABuilding] = useState();
    const [isCICSBuilding, setCICSBuilding] = useState();

    const activateBuildingMap = (buildingName) => {
        if (buildingName === 'CEAFA') {
            setCEAFABuilding(true);
            setCICSBuilding(false);
        }
        else if (buildingName === 'CICS') {
            setCEAFABuilding(false);
            setCICSBuilding(true);
        }
        else {
            setCEAFABuilding(false);
            setCICSBuilding(false);
        }
    }

    // Toggle Floor Container
    const [showFloorContainer, setShowFloorContainer] = useState(false);
    const [lastClickedIndex, setLastClickedIndex] = useState();

    const [showCICSBuilding, setShowCICSBuilding] = useState(false);
    const [showCEAFABuilding, setShowCEAFABuilding] = useState(false);
    
    const toggleFloorContainer = (buildingName, index) => {
        
        // setCICSBuilding(!isCICSBuilding);
        // setCEAFABuilding(isCEAFABuilding);

        // const timer = setTimeout(() => {
        //     setShowFloor(true);
        // }, 1000);

        if (lastClickedIndex === index) {
            setLastClickedIndex(null);
            setShowFloorContainer(false);
            setBackgroundImage('src/assets/bsu-alangilan-siteplan.jpg');
        } 
        else {
            setLastClickedIndex(index);
            setShowFloorContainer(false);
            setBackgroundImage(BackgroundColor[index]);
        }

        if (buildingName === 'CEAFA') {
            setShowCEAFABuilding(true);
            setShowCICSBuilding(false);
        }
        else if (buildingName === 'CICS') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(true);
        }

    };


    // is video ended
    const [isvideoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setShowFloorContainer(true);
    };

    

    const closeFloorContainer = () => {
        setShowCICSBuilding(false);
    }



    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };

    return(
        <div className='fullContainer'>
            <BuildingContainer  toggleFloorContainer={toggleFloorContainer} buildingList={buildings} activateBuildingMap={activateBuildingMap} />
            <MapContainer       
            showFloorContainer={showFloorContainer} 
                                backgroundImage={backgroundImage} 
                                showCEAFABuilding={showCEAFABuilding}
                                showCICSBuilding={showCICSBuilding}
                                isCEAFABuilding={isCEAFABuilding}
                                isCICSBuilding={isCICSBuilding}
                                handleVideoEnd={handleVideoEnd}
                                isvideoEnded={isvideoEnded}
                                
                                />

        </div>
    );
}

export default Container