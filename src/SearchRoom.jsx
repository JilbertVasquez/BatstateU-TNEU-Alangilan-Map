import './BuildingLayout.css'
import * as CICSRooms from './CICSInfo';
import * as CITRooms from './CITInfo';
import * as RGRRooms from './RGRInfo';
import * as SSCRooms from './SSCInfo';
import * as CEAFARooms from './CEAFAInfo';
import * as GYMRooms from './GYMInfo';

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
    
    const floorRoomsByBuilding = {
        CICS: [CICSRooms.floor1Rooms, CICSRooms.floor2Rooms, CICSRooms.floor3Rooms, CICSRooms.floor4Rooms, CICSRooms.floor5Rooms],
        CIT: [CITRooms.lowerGround, CITRooms.floor1Rooms, CITRooms.floor2Rooms, CITRooms.floor3Rooms, CITRooms.floor4Rooms, CITRooms.floor5Rooms],
        RGR: [RGRRooms.floor1Rooms, RGRRooms.floor2Rooms, RGRRooms.floor3Rooms],
        SSC: [SSCRooms.floor1Rooms, SSCRooms.floor2Rooms, SSCRooms.floor3Rooms],
        CEAFA: [CEAFARooms.floor1Rooms, CEAFARooms.floor2Rooms, CEAFARooms.floor3Rooms, CEAFARooms.floor4Rooms],
        GYM: [GYMRooms.floor1Rooms, GYMRooms.floor2Rooms, GYMRooms.floor3Rooms]
    };

    return(
        <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
            <div className='floorPlanLayout'>
                    <div>
                        {floorRoomsByBuilding[searchRoomInfo[0].building].map((rooms, floorIndex) => (
                            <div key={floorIndex}>
                                {rooms.map((room, roomIndex) => (
                                    <div key={roomIndex}>
                                        {searchRoomInfo[0].room === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
                <h1>{searchRoomInfo[0].building} - {searchRoomInfo[0].floor}</h1>
            </div>
            <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>CLOSE</button>
        </div>
    )
}


export default SearchRoom