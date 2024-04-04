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
      },6000); // 60 seconds
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

    const buildings = [
        {name: "CEAFA"},
        {name: "CICS"},
        {name: "CIT"},
        {name: "RGR"},
        {name: "GYM"},
        {name: "STEERHUB"},
        {name: "STUDENT SERVICES"},
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
        if (lastClickedIndex === index) {
            setLastClickedIndex(null);
            setShowFloorContainer(false);
        } 
        else {
            if (lastClickedIndex != index && lastClickedIndex != null) {
                setShowFloorContainer(false);
            }
            else {
                setShowFloorContainer(true);
            }
            setLastClickedIndex(index);
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

    const [searchRoomInfo, setSearchRoomInfo] = useState([]);

    const updateRoomInfo = (roomInfo) => {
        setLastSearchBuilding(roomInfo.building);
        setLastSearchRoom(roomInfo.room);
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

    const [showKiosk, setShowKiosk] = useState(true);

    const selectCurrentKiosk = (buildingName) => {
        PathHandler(buildingName);
        setShowKiosk(false);
        console.log("SELECTED KIOSK" + buildingName);
    }

    return(
        <div className='outsideContainer'>
            <Overlay show={showOverlay} onClick={handleOverlayClick} />
            <Kiosk selectCurrentKiosk={selectCurrentKiosk} showKiosk={showKiosk} />
            <div className='fullContainer'>
            <BuildingContainer  toggleFloorContainer={toggleFloorContainer} buildingList={buildings} activateBuildingMap={activateBuildingMap} toggleSearchFloorContainer={toggleSearchFloorContainer} updateRoomInfo={updateRoomInfo} hideSearchFloor={hideSearchFloor} hideDefaultFloor={hideDefaultFloor} />
            <MapContainer       
            showFloorContainer={showFloorContainer} 
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