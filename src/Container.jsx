import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';
import Kiosk from './Kiosk';
import PathHandler from './PathHandler';

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
    // const buildings = [
    //     {name: "CEAFA", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
    //         {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
    //         {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
    //     ]},
    //     {name: "CICS", 
    //     floors: [
    //         // {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105", "Room 106"]},
    //         {name: "Floor 2", rooms: ['CpE Faculty Room', 'CICS Student Services', 'CICS Consultation Room', 'ICS Faculty Room', 'Accreditation Room', 'Deans Office']},
    //         {name: "Floor 3", rooms: ['CpE Laboratory', 'CICSO Laboratory', 'MultiMedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3']},
    //         {name: "Floor 4", rooms: ['Smart Classroom 1', 'Smart Classroom 2', 'Technical\'s Room']},
    //         // {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
    //     ]},
    //     {name: "CIT", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
    //         {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
    //         {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
    //     ]},
    //     {name: "RGR", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
    //     ]},
    //     {name: "GYM", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["ICT Offices", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //     ]},
    //     {name: "STEERHUB", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
    //         {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
    //         {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
    //     ]},
    //     {name: "STUDENT SERVICES", 
    //     floors: [
    //         {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
    //         {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //         {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
    //     ]},
    // ]

    const buildings = [
        {name: "CEAFA"},
        {name: "CICS"},
        {name: "CIT"},
        {name: "RGR"},
        {name: "GYM"},
        {name: "STEERHUB"},
        {name: "STUDENT SERVICES"},
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
    const [isSCSBuilding, setSSCBuilding] = useState();
    const [isGYMBuilding, setGYMBuilding] = useState();
    const [isSteerHubBuilding, setSteerHubBuilding] = useState();

    const activateBuildingMap = (buildingName) => {
        if (buildingName === 'CEAFA') {
            setCampusMap(false);
            setCEAFABuilding(true);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);

        }
        else if (buildingName === 'CICS') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(true);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'RGR') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(true);
            setSSCBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'CIT') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(true);
            setRGRBuilding(false);
            setSSCBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'STUDENT SERVICES') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(true);
            setGYMBuilding(false);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'GYM') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(false);
            setGYMBuilding(true);
            setSteerHubBuilding(false);
        }
        else if (buildingName === 'STEERHUB') {
            setCampusMap(false);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(false);
            setGYMBuilding(false);
            setSteerHubBuilding(true);
        }
        else {
            setCampusMap(true);
            setCEAFABuilding(false);
            setCICSBuilding(false);
            setCITBuilding(false);
            setRGRBuilding(false);
            setSSCBuilding(false);
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
            setCampusMap(false);
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


    const [isvideoEnded2, setVideoEnded2] = useState(false);

    const handleVideoEnd2 = () => {
        setVideoEnded2(true);
        setShowSearchFloorContainer(true);
    };


    const [showSearchFloorContainer, setShowSearchFloorContainer] = useState(false);
    const [showSearchFloorContainerIndex, setShowSearchFloorContainerIndex] = useState();
    const [lastSearchBuilding, setLastSearchBuilding] = useState();
    const [lastSearchRoom, setLastSearchRoom] = useState();

    const toggleSearchFloorContainer = (index, searchInfo) => {
        setShowFloorContainer(false);
        if (showSearchFloorContainerIndex === index) {
            setShowSearchFloorContainerIndex(null);
            setShowSearchFloorContainer(false);
        }
        else {
            setShowSearchFloorContainerIndex(index);
            setShowSearchFloorContainer(true);
        }

        if (lastSearchBuilding === searchInfo.building) {
            setShowSearchFloorContainer(true);
            console.log("JIL");
        }
        else {
            setShowSearchFloorContainer(false);
        }
        if (lastSearchRoom === searchInfo.room) {
            setShowSearchFloorContainer(!showSearchFloorContainerIndex);
            console.log("ASDAD");
        }
        

    }

    const hideDefaultFloor= () => {
        setShowFloorContainer(false);

        setCampusMap(false);
        setCICSBuilding(false);
        setCITBuilding(false);
        setRGRBuilding(false);
        setCEAFABuilding(false);
        setGYMBuilding(false);
        setSSCBuilding(false);

    }

    const hideSearchFloor= () => {
        setShowSearchFloorContainer(false);

        setCampusMap(false);
        setCICSBuilding2(false);
        setCITBuilding2(false);
        setRGRBuilding2(false);
        setCEAFABuilding2(false);
        setGYMBuilding2(false);
        setSSCBuilding2(false);
    }


    const [isCICSBuilding2, setCICSBuilding2] = useState(false);
    const [isCITBuilding2, setCITBuilding2] = useState(false);
    const [isRGRBuilding2, setRGRBuilding2] = useState(false);
    const [isSSCBuilding2, setSSCBuilding2] = useState(false);

    const [isCEAFABuilding2, setCEAFABuilding2] = useState(false);
    const [isGYMBuilding2, setGYMBuilding2] = useState(false);
    // const [isSTEERHUBBuilding2, setSTEERHUBBuilding2] = useState(false);


    const [searchRoomInfo, setSearchRoomInfo] = useState([]);

    const updateRoomInfo = (roomInfo) => {
        setLastSearchBuilding(roomInfo.building);
        setLastSearchRoom(roomInfo.room);
        // dsetShowSearchFloorContainer(false);


        setShowFloorContainer(false);
        setSearchRoomInfo([]);
        setSearchRoomInfo([{ room: roomInfo.room, building: roomInfo.building, floor: roomInfo.floor }]);
        console.log(searchRoomInfo[0]);
        if(roomInfo.building === 'CICS') {
            console.log("HELLO WORssssssssLD");
            setCICSBuilding2(true);
            setCITBuilding2(false);
            setRGRBuilding2(false);
            setSSCBuilding2(false);
            setCEAFABuilding2(false);
            setGYMBuilding2(false);
        }
        else if(roomInfo.building === 'CIT') {
            console.log("HELLO asdasdsad");
            setCICSBuilding2(false);
            setCITBuilding2(true);
            setRGRBuilding2(false);
            setSSCBuilding2(false);
            setCEAFABuilding2(false);
            setGYMBuilding2(false);
        }
        else if(roomInfo.building === 'RGR') {
            console.log("HELLO asdasdsad");
            setCICSBuilding2(false);
            setCITBuilding2(false);
            setRGRBuilding2(true);
            setSSCBuilding2(false);
            setCEAFABuilding2(false);
            setGYMBuilding2(false);
        }
        else if(roomInfo.building === 'SSC') {
            console.log("HELLO asdasdsad");
            setCICSBuilding2(false);
            setCITBuilding2(false);
            setRGRBuilding2(false);
            setSSCBuilding2(true);
            setCEAFABuilding2(false);
            setGYMBuilding2(false);
        }
        else if(roomInfo.building === 'CEAFA') {
            console.log("HELLO asdasdsad");
            setCICSBuilding2(false);
            setCITBuilding2(false);
            setRGRBuilding2(false);
            setSSCBuilding2(false);
            setCEAFABuilding2(true);
            setGYMBuilding2(false);
        }
        else if(roomInfo.building === 'GYM') {
            console.log("HELLO asdasdsad");
            setCICSBuilding2(false);
            setCITBuilding2(false);
            setRGRBuilding2(false);
            setSSCBuilding2(false);
            setCEAFABuilding2(false);
            setGYMBuilding2(true);
        }
    }


    
    const [selectedKiosk, setSelectedKiosk] = useState();
    const [showKiosk, setShowKiosk] = useState(true);

    const selectCurrentKiosk = (buildingName) => {
        setSelectedKiosk(buildingName);
        PathHandler(buildingName);
        setShowKiosk(false);
        console.log("SELECTED KIOSK" + buildingName);
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
            <Kiosk selectCurrentKiosk={selectCurrentKiosk} showKiosk={showKiosk} />
            <div className='fullContainer'>
            <BuildingContainer  toggleFloorContainer={toggleFloorContainer} buildingList={buildings} activateBuildingMap={activateBuildingMap} toggleSearchFloorContainer={toggleSearchFloorContainer} updateRoomInfo={updateRoomInfo} hideSearchFloor={hideSearchFloor} hideDefaultFloor={hideDefaultFloor} />
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

                                isCICSBuilding2={isCICSBuilding2}
                                isCITBuilding2={isCITBuilding2}
                                isRGRBuilding2={isRGRBuilding2}
                                isSSCBuilding2={isSSCBuilding2}
                                isCEAFABuilding2={isCEAFABuilding2}
                                isGYMBuilding2={isGYMBuilding2}
                                handleVideoEnd2={handleVideoEnd2}
                                isvideoEnded2={isvideoEnded2}
                                />
        </div>
        <div className='footer'>
            <h2>Batangas State University - The National Engineering University</h2>
        </div>
        </div>
    );
}

export default Container