import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';

function Container() {

    const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowOverlay(true);
      }, 60000); // 60 seconds
    };

    // Reset timer on user activity
    const handleUserActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    // Initial timer start
    resetTimer();

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

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
            // {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105", "Room 106"]},
            {name: "Floor 2", rooms: ['CpE Faculty Room', 'CICS Student Services', 'CICS Consultation Room', 'ICS Faculty Room', 'Accreditation Room', 'Deans Office']},
            {name: "Floor 3", rooms: ['CpE Laboratory', 'CICSO Laboratory', 'MultiMedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3']},
            {name: "Floor 4", rooms: ['Smart Classroom 1', 'Smart Classroom 2', 'Technical\'s Room']},
            // {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
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
        {name: "STEERHUB", 
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
    const [isCampusMap, setCampusMap] = useState(true);
    const [isCEAFABuilding, setCEAFABuilding] = useState();
    const [isCICSBuilding, setCICSBuilding] = useState();
    const [isCITBuilding, setCITBuilding] = useState();
    const [isRGRBuilding, setRGRBuilding] = useState();
    const [isSCSBuilding, setSCSBuilding] = useState();
    const [isGYMBuilding, setGYMBuilding] = useState();
    const [isSteerHubBuilding, setSteerHubBuilding] = useState();

    const activateBuildingMap = (buildingName) => {
        if (buildingName === 'CEAFA') {
            setCampusMap(false);
            setCEAFABuilding(true);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);

        }
        else if (buildingName === 'CICS') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(true);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'RGR') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(true);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'CIT') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(true);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'STUDENT SERVICES') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(true);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'GYM') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(true);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'STEERHUB') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(true);
        }
        else {
            setCampusMap(true);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSCSBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
            setShowFloorContainer(false);
            
        }
        
    }

    // Toggle Floor Container
    const [showFloorContainer, setShowFloorContainer] = useState(false);
    const [lastClickedIndex, setLastClickedIndex] = useState();

    const [showCICSBuilding, setShowCICSBuilding] = useState(false);
    const [showCEAFABuilding, setShowCEAFABuilding] = useState(false);
    const [showCITBuilding, setShowCITBuilding] = useState(false);
    const [showRGRBuilding, setShowRGRBuilding] = useState(false);
    const [showSCSBuilding, setShowSCSBuilding] = useState(false);
    const [showGYMBuilding, setShowGYMBuilding] = useState(false);
    const [showSteerHubBuilding, setShowSteerHubBuilding] = useState(false);
    
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
            if (lastClickedIndex != index && lastClickedIndex != null) {
                setShowFloorContainer(false);
                
            }
            else {
                
                setShowFloorContainer(true);
            }
            setLastClickedIndex(index);
            // setShowFloorContainer(true);
            setBackgroundImage(BackgroundColor[index]);
        }

        if (buildingName === 'CEAFA') {
            setShowCEAFABuilding(true);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'CICS') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(true);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'CIT') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(true);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'RGR') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(true);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'STUDENT SERVICES') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(true);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'GYM') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(true);
            setShowSteerHubBuilding(false);
        }
        else if (buildingName === 'STEERHUB') {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(true);
        }
        else {
            setShowCEAFABuilding(false);
            setShowCICSBuilding(false);
            setShowCITBuilding(false);
            setShowRGRBuilding(false);
            setShowSCSBuilding(false);
            setShowGYMBuilding(false);
            setShowSteerHubBuilding(false);
        }

    };


    // is video ended
    const [isvideoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setShowFloorContainer(true);
    };


    const [showSearchFloorContainer, setShowSearchFloorContainer] = useState(false);
    const [showSearchFloorContainerIndex, setShowSearchFloorContainerIndex] = useState();

    const toggleSearchFloorContainer = (index) => {
        setShowFloorContainer(false);
        if (showSearchFloorContainerIndex === index) {
            setShowSearchFloorContainerIndex(null);
            setShowSearchFloorContainer(false);
        }
        else {
            setShowSearchFloorContainerIndex(index);
            setShowSearchFloorContainer(true);
        }
    }

    const hideSearchFloor= () => {
        showSearchFloorContainer(false);
    }

    const [searchRoomInfo, setSearchRoomInfo] = useState([]);

    const updateRoomInfo = (roomInfo) => {
        setShowFloorContainer(false);
        setSearchRoomInfo([]);
        setSearchRoomInfo([{ room: roomInfo.room, building: roomInfo.building, floor: roomInfo.floor }]);
        console.log(searchRoomInfo[0]);
        if(roomInfo.building === 'CICS') {
            console.log("HELLO WORLD");
            
        }
    }


    
    

    const closeFloorContainer = () => {
        setShowCICSBuilding(false);
    }



    // const changeBackground = (imagePath) => {
    //     setBackgroundImage(imagePath);
    // };

    return(
        <div className='outsideContainer'>
            <Overlay show={showOverlay} onClick={handleOverlayClick} />
            <div className='fullContainer'>
            <BuildingContainer  toggleFloorContainer={toggleFloorContainer} buildingList={buildings} activateBuildingMap={activateBuildingMap} toggleSearchFloorContainer={toggleSearchFloorContainer} updateRoomInfo={updateRoomInfo} hideSearchFloor={hideSearchFloor} />
            <MapContainer       
            showFloorContainer={showFloorContainer} 
                                backgroundImage={backgroundImage} 
                                showCEAFABuilding={showCEAFABuilding}
                                showCICSBuilding={showCICSBuilding}
                                showCITBuilding={showCITBuilding}
                                showRGRBuilding={showRGRBuilding}
                                showSCSBuilding={showSCSBuilding}
                                showGYMBuilding={showGYMBuilding}
                                showSteerHubBuilding={showSteerHubBuilding}

                                isCampusMap={isCampusMap}
                                isCEAFABuilding={isCEAFABuilding}
                                isCICSBuilding={isCICSBuilding}
                                isCITBuilding={isCITBuilding}
                                isRGRBuilding={isRGRBuilding}
                                isSCSBuilding={isSCSBuilding}
                                isGYMBuilding={isGYMBuilding}
                                isSteerHubBuilding={isSteerHubBuilding}
                                handleVideoEnd={handleVideoEnd}
                                isvideoEnded={isvideoEnded}
                                
                                showSearchFloorContainer={showSearchFloorContainer}
                                searchRoomInfo={searchRoomInfo}
                                />
        </div>
        <div className='footer'>
            <h2>Batangas State University - The National Engineering University</h2>
        </div>
        </div>
    );
}

export default Container