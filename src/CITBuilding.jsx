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

    // const lowerGround = [
    //     { name: 'Faculty', videoSrc: 'src/assets/CITVideos/cit_001faculty.mp4' },
    //     { name: 'Mechanical Technology', videoSrc: 'src/assets/CITVideos/cit_002mechanicaltechnology.mp4' },
    //     { name: 'Mechanical And Automotive Shop', videoSrc: 'src/assets/CITVideos/cit_003mechanicalandautomationshop.mp4' },
    //     { name: 'Deans Extension', videoSrc: 'src/assets/CITVideos/cit_004deanextension.mp4' }
    // ];
    
    // const floor1Rooms = [
    //     { name: 'Electronic Shop', videoSrc: 'src/assets/CITVideos/cit_101electronicshop.mp4' },
    //     { name: 'Electronic Technology Shop', videoSrc: 'src/assets/CITVideos/cit_102electronictechnologyshop.mp4' },
    //     { name: 'Instrumentation And Control', videoSrc: 'src/assets/CITVideos/cit_103instrumentationandcontrol.mp4' },
    //     { name: 'Physics Lab', videoSrc: 'src/assets/CITVideos/cit_104physicslab.mp4' },
    //     { name: 'Food Tech', videoSrc: 'src/assets/CITVideos/cit_105foodtech.mp4' },
    //     { name: 'Scholarship And Financial Assistance Office / Accreditation Room', videoSrc: 'src/assets/CITVideos/cit_106accreditation.mp4' }
    // ];
    
    // const floor2Rooms = [
    //     { name: 'Deans Office', videoSrc: 'src/assets/CITVideos/cit_201deansoffice.mp4' },
    //     { name: 'Faculty 1', videoSrc: 'src/assets/CITVideos/cit_202faclty1.mp4' },
    //     { name: 'Faculty 2', videoSrc: 'src/assets/CITVideos/cit_203faclty2.mp4' },
    //     { name: 'Multi-Media Room 1', videoSrc: 'src/assets/CITVideos/cit_204multimediaroom1.mp4' },
    //     { name: 'Multi-Media Room 2', videoSrc: 'src/assets/CITVideos/cit_205multimediaroom2.mp4' },
    //     { name: 'Extension Services', videoSrc: 'src/assets/CITVideos/cit_206gadextension.mp4' }
    // ];
    
    // const floor3Rooms = [
    //     { name: 'Computer Lab 1', videoSrc: 'src/assets/CITVideos/cit_301computerlab1.mp4' },
    //     { name: 'Computer Lab 2', videoSrc: 'src/assets/CITVideos/cit_302computerlab2.mp4' },
    //     { name: 'Computer Lab 3', videoSrc: 'src/assets/CITVideos/cit_303computerlab3.mp4' },
    //     { name: 'ELDC', videoSrc: 'src/assets/CITVideos/cit_304eldc.mp4' },
    //     { name: 'Smart Classroom', videoSrc: 'src/assets/CITVideos/cit_305smartclassroom.mp4' },
    //     { name: 'Research Office', videoSrc: 'src/assets/CITVideos/cit_306researchoffice.mp4' }
    // ];
    
    // const floor4Rooms = [
    //     { name: 'Room 401', videoSrc: 'src/assets/CITVideos/cit_401room.mp4' },
    //     { name: 'Room 402', videoSrc: 'src/assets/CITVideos/cit_402room.mp4' },
    //     { name: 'Room 403', videoSrc: 'src/assets/CITVideos/cit_403room.mp4' },
    //     { name: 'Room 404', videoSrc: 'src/assets/CITVideos/cit_404room.mp4' },
    //     { name: 'Room 405', videoSrc: 'src/assets/CITVideos/cit_405room.mp4' },
    //     { name: 'OSAS', videoSrc: 'src/assets/CITVideos/cit_406osas.mp4' }
    // ];
    
    // const floor5Rooms = [
    //     { name: 'Room 501', videoSrc: 'src/assets/CITVideos/cit_501room.mp4' },
    //     { name: 'Room 502', videoSrc: 'src/assets/CITVideos/cit_502room.mp4' },
    //     { name: 'Room 503', videoSrc: 'src/assets/CITVideos/cit_503room.mp4' },
    //     { name: 'Room 504', videoSrc: 'src/assets/CITVideos/cit_504room.mp4' },
    //     { name: 'Room 505', videoSrc: 'src/assets/CITVideos/cit_505room.mp4' },
    //     // { name: 'Room 506', videoSrc: 'src/assets/CITVideos/cit_506.mp4' }
    // ];

    const floorRooms = [CITRooms.lowerGround, CITRooms.floor1Rooms, CITRooms.floor2Rooms, CITRooms.floor3Rooms, CITRooms.floor4Rooms, CITRooms.floor5Rooms];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`FloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>Lower Ground</button>
                    <button className={`FloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 1</button>
                    <button className={`FloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 2</button>
                    <button className={`FloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 3</button>
                    <button className={`FloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 4</button>
                    <button className={`FloorButtons ${lastClickedIndex === 5 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(5) }}>floor 5</button> */}
                
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
                    {/* <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/> */}
                    {/* {activeButton === 'Room 101' && <video src="src\assets\ifbread.mp4" autoPlay className='floorPlanImage'></video>}
                    {activeButton === 'Room 401' && <video src="src\assets\summer.mp4" autoPlay className='floorPlanImage'></video>} */}
                
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
    
    // const LowerGround = ['Mechanical Technology', 'Faculty', 'Storage', 'Mechanical And Automotive Shop'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 101');}}>Mechanical Technology</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 102');}}>Faculty</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 103');}}>Storage</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 104');}}>Mechanical And Automotive Shop</button> */}
        
            {lowerGround.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}
        </div>
    )
}

function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor1Rooms, currentActiveButton}) {
    
    // const floor1Rooms = ['Eletronic Shop', 'Electronic Technology Shop', 'Instrumentation And Control', 'Physics Lab', 'Food Tech', 'Scholarship And financial Assistance Office / Accreditation Room'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Electronic Shop');}}>Electronic Shop</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Electornic Technology Shop');}}>Electornic Technology Shop</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Instrumentation And Control');}}>Instrumentation And Control</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Physics Lab');}}>Physics Lab</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Food Tech');}}>Food Tech</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Scholarship And Financial Assistance Office / Accreditation Room');}}>Scholarship And Financial Assistance Office / Accreditation Room</button> */}
        
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor2Rooms, currentActiveButton}) {
    
    // const floor2Rooms = ['Deans Office', 'Faculty 1', 'Faculty 2', 'Multi-Media Room 1', 'Multi-Media Room 2', 'Extension Services'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Dean's Office</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Faculty 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Faculty 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>Multi-Media Room 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Multi-Media Room 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Extention Services</button> */}

            {floor2Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}

        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor3Rooms, currentActiveButton}) {
    
    // const floor3Rooms = ['Com Lab 1', 'Com Lab 2', 'Com Lab 3', 'ELDC', 'Smart Classroom', 'Reasearch Office'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Com Lab 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Com Lab 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Com Lab 3</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>ELDC</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Smart Classroom</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Reasearch Office</button> */}
        
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}

        </div>
    )
}

function Floor4 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor4Rooms, currentActiveButton}) {
    
    // const floor4Rooms = ['Room 401', 'Room 402', 'Room 403', 'Room 404', 'Room 405', 'OSAS'];

    return (
        <div className='roomHeader'>
        {/* //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>Room 401</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>Room 402</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Room 403</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Room 404</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Room 405</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>OSAS</button> */}

            {floor4Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
            ))}
        </div>
    )
}


function Floor5 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor5Rooms, currentActiveButton}) {
    
    // const floor5Rooms = ['Room 501', 'Room 502', 'Room 503', 'Room 504', 'Room 505'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>Room 501</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>Room 502</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Room 503</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Room 504</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Room 505</button> */}
        
            {floor5Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}




export default CITBuilding