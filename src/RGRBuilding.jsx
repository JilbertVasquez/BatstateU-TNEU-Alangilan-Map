import './BuildingLayout.css'
import * as RGRRooms from './RGRInfo';

import React, { useState, useRef } from 'react';

function RGRBuilding() {

    const [lastClickedIndex, setLastClickedIndex] = useState(0);
    const [isFloor1Visible, setFloor1Visible] = useState(true);
    const [isFloor2Visible, setFloor2Visible] = useState(false);
    const [isFloor3Visible, setFloor3Visible] = useState(false);

    const roomContainerVisible = (index) => {
        if (lastClickedIndex === index) {
            setLastClickedIndex(index);
        } 
        else {
            setLastClickedIndex(index);
        }

        switch(index) {
            case 0:
                setFloor1Visible(true);
                setFloor2Visible(false);
                setFloor3Visible(false);
                break;
            case 1:
                setFloor1Visible(false);
                setFloor2Visible(true);
                setFloor3Visible(false);
                break;
            case 2:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(true);
                break;
            case 3:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                break;
            case 4:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                break;
            default:
                setFloor1Visible(true);
                setFloor2Visible(false);
                setFloor3Visible(false);
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

    const RGRFloors = ['Floor 1', 'Floor 2', 'Floor 3'];

    // const floor1Rooms = [
    //     { name: 'Hydraulics Laboratory',        videoSrc: 'src/assets/RGRVideos/rgr_101hydraulicslab.mp4' },
    //     { name: 'Soil Laboratory',              videoSrc: 'src/assets/RGRVideos/rgr_102soillab.mp4' },
    //     { name: 'Environmental Laboratory',     videoSrc: 'src/assets/RGRVideos/rgr_103environmentallab.mp4' }
    // ];
    
    // const floor2Rooms = [
    //     { name: 'Faculty Room 1',           videoSrc: 'src/assets/RGRVideos/rgr_204faculty1.mp4' },
    //     { name: 'RGR 201',                  videoSrc: 'src/assets/RGRVideos/rgr_201room.mp4' },
    //     { name: 'RGR 202',                  videoSrc: 'src/assets/RGRVideos/rgr_202room.mp4' },
    //     { name: 'RGR 203',                  videoSrc: 'src/assets/RGRVideos/rgr_203room.mp4' },
    //     { name: 'Faculty Room 2',           videoSrc: 'src/assets/RGRVideos/rgr_205faculty2.mp4' }
    // ];
    
    // const floor3Rooms = [
    //     { name: 'Faculty / Consultation Room',      videoSrc: 'src/assets/RGRVideos/rgr_301consultation.mp4' },
    //     { name: 'RGR 302',                          videoSrc: 'src/assets/RGRVideos/rgr_302room.mp4' },
    //     { name: 'RGR 303',                          videoSrc: 'src/assets/RGRVideos/rgr_303room.mp4' }
    // ];

    const floorRooms = [RGRRooms.floor1Rooms, RGRRooms.floor2Rooms, RGRRooms.floor3Rooms];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`CICSFloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>floor 1</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button> */}
                
                    {RGRFloors.map((floor, index) => (
                        <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index); currentActiveFloor(floor) }}>{floor} </button>
                    ))}
                
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor1Rooms={RGRRooms.floor1Rooms}/>}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor2Rooms={RGRRooms.floor2Rooms}/>}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor3Rooms={RGRRooms.floor3Rooms}/>}
                </div>
                <button className='closeButton' onClick={() => {toggleFloorSectionVisibility();}}>CLOSE</button>
            </div>

            <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
                <div className='floorPlanLayout'>
                    {/* <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/> */}
                    {/* {activeButton === 'Room 401' && <video src="src\assets\summer.mp4" autoPlay className='floorPlanImage'></video>} */}
                
                    {floorRooms.map((rooms, floorIndex) => (
                            <div key={floorIndex}>
                                {rooms.map((room, roomIndex) => (
                                    <div key={roomIndex}>
                                        {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    <h1>RGR - {activeFloor}</h1>
                
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}


function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor1Rooms, currentActiveButton}) {
    
    // const floor1Rooms = ['Hydraulics Laboratory', 'Soil Laboratory', 'Environmental Laboratory'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 101');}}>Hydraulics Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 102');}}>Soil Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 103');}}>Environmental Laboratory</button> */}
        
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor2Rooms, currentActiveButton}) {
    
    // const floor2Rooms = ['Faculty Room 1', 'RGR 201', 'RGR 202', 'RGR 203', 'Faculty Room 2'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Faculty Room 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>RGR 201</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>RGR 202</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>RGR 203</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>Faculty Room 2</button> */}
        
            {floor2Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor3Rooms, currentActiveButton}) {
    
    // const floor3Rooms = ['Faculty / Consultation Room', 'RGR 302', 'RGR 303'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>Faculty / Consultation Room</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>RGR 302</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>RGR 303</button> */}
       
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
       
        </div>
    )
}



export default RGRBuilding