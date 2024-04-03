import './BuildingLayout.css'
import * as CITRooms from './CITInfo';

import React, { useState, useRef } from 'react';

function CITBuilding() {

    const [lastClickedIndex, setLastClickedIndex] = useState(0);
    const [isLowerGroundVisible, setLowerGroundVisible] = useState(true);
    const [isFloor1Visible, setFloor1Visible] = useState(false);
    const [isFloor2Visible, setFloor2Visible] = useState(false);
    const [isFloor3Visible, setFloor3Visible] = useState(false);
    const [isFloor4Visible, setFloor4Visible] = useState(false);
    const [isFloor5Visible, setFloor5Visible] = useState(false);

    const roomContainerVisible = (index) => {
        if (lastClickedIndex === index) {
            setLastClickedIndex(index);
        } 
        else {
            setLastClickedIndex(index);
        }

        switch(index) {
            case 0:
                setLowerGroundVisible(true);
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 1:
                setLowerGroundVisible(false);
                setFloor1Visible(true);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 2:
                setLowerGroundVisible(false);
                setFloor1Visible(false);
                setFloor2Visible(true);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 3:
                setLowerGroundVisible(false);
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(true);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 4:
                setLowerGroundVisible(false);
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(true);
                setFloor5Visible(false);
                break;
            case 5:
                setLowerGroundVisible(false);
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(true);
                break;
            default:
                setLowerGroundVisible(true);
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
        }
    }
    
    const [isFloorSectionVisible, setFloorSectionVisible] = useState(true);

    const [isFloorContainerVisible, setFloorContainerVisible] = useState(true);

    const [isFloorPlanVisible, setFloorPlanVisible] = useState(false);

    const toggleFloorSectionVisibility = () => {
        setFloorSectionVisible(!isFloorSectionVisible);
    };

    const toggleFloorContainerVisibility = () => {
        setFloorContainerVisible(!isFloorContainerVisible);
    };

    const toogleFloorPlanVisibility = () => {
        setFloorPlanVisible(!isFloorPlanVisible);
    };

    const [activeButton, setActiveButton] = useState('');

    const currentActiveButton = (buttonText) => {
        setActiveButton(buttonText);
    };

    const [activeFloor, setActiveFloor] = useState('Floor 1');

    const currentActiveFloor = (floor) => {
        setActiveFloor(floor);
    };

    const CITFloors = ['Lower Ground', 'Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'];

    const floorRooms = [CITRooms.lowerGround, CITRooms.floor1Rooms, CITRooms.floor2Rooms, CITRooms.floor3Rooms, CITRooms.floor4Rooms, CITRooms.floor5Rooms];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {CITFloors.map((floor, index) => (
                        <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index); currentActiveFloor(floor) }}>{floor} </button>
                    ))}
                </div>
                <div className='roomHeader'> 
                    {isFloorContainerVisible && isLowerGroundVisible && <LowerGround toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} lowerGround={CITRooms.lowerGround}/>}
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor1Rooms={CITRooms.floor1Rooms}/>}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor2Rooms={CITRooms.floor2Rooms}/>}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor3Rooms={CITRooms.floor3Rooms}/>}
                    {isFloorContainerVisible && isFloor4Visible && <Floor4 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor4Rooms={CITRooms.floor4Rooms}/>}
                    {isFloorContainerVisible && isFloor5Visible && <Floor5 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor5Rooms={CITRooms.floor5Rooms}/>}
                </div>
                <button className='closeButton' onClick={() => {toggleFloorSectionVisibility();}}>CLOSE</button>
            </div>

            <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
                <div className='floorPlanLayout'>
                    {floorRooms.map((rooms, floorIndex) => (
                        <div key={floorIndex}>
                            {rooms.map((room, roomIndex) => (
                                <div key={roomIndex}>
                                    {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                                </div>
                            ))}
                        </div>
                    ))}
                    <h1>CIT - {activeFloor}</h1>
                
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}

function LowerGround ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, lowerGround, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {lowerGround.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}
        </div>
    )
}

function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor1Rooms, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor2Rooms, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {floor2Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}
        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor3Rooms, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        </div>
    )
}

function Floor4 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor4Rooms, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {floor4Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}
        </div>
    )
}

function Floor5 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor5Rooms, currentActiveButton}) {
    return (
        <div className='roomHeader'>
            {floor5Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        </div>
    )
}

export default CITBuilding