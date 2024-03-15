import './BuildingLayout.css'
import * as CICSRooms from './CICSInfo';

import React, { useState, useRef } from 'react';

function SearchRoom({ searchRoomInfo }) {

    const [isFloorContainerVisible, setFloorContainerVisible] = useState(true);

    const [isFloorPlanVisible, setFloorPlanVisible] = useState(true);

    const toggleFloorContainerVisibility = () => {
        setFloorContainerVisible(!isFloorContainerVisible);
    };

    const toogleFloorPlanVisibility = () => {
        setFloorPlanVisible(!isFloorPlanVisible);
    };

    

    // const [showActiveBuilding, setActiveBuilding] = useState();

    const checkBuilding = (buildingName) => {
        if (buildingName === 'CICS') {
            setActiveBuilding(buildingName);
        }
    }


    const CICSFloorRooms = [CICSRooms.floor1Rooms, CICSRooms.floor2Rooms, CICSRooms.floor3Rooms, CICSRooms.floor4Rooms, CICSRooms.floor5Rooms];

    

    return(
        <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
            <div className='floorPlanLayout'>
                {/* <h1>HELLO WORLD</h1> */}

                    {/* <h1>{searchRoomInfo[0].floor}</h1> */}
                {console.log(searchRoomInfo[0])}
                {CICSFloorRooms.map((rooms, floorIndex) => (
                            <div key={floorIndex}>
                                {rooms.map((room, roomIndex) => (
                                    <div key={roomIndex}>
                                        {/* <h1>{CICSFloors[floorIndex]}</h1> */}
                                        {searchRoomInfo[0].room === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                                    </div>
                                ))}
                            </div>
                        ))}
                <h1>{searchRoomInfo[0].floor}</h1>
                {/* <img src="src\assets\3dcampusv2.jpg" alt="campusmap" /> */}
            </div>
            <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>CLOSE</button>
        </div>
    )
}


export default SearchRoom