import './BuildingLayout.css'
import * as CEAFARooms from './CEAFAInfo';

import React, { useState, useRef } from 'react';

function CEAFABuilding() {

    const [lastClickedIndex, setLastClickedIndex] = useState(0);
    const [isFloor1Visible, setFloor1Visible] = useState(true);
    const [isFloor2Visible, setFloor2Visible] = useState(false);
    const [isFloor3Visible, setFloor3Visible] = useState(false);
    const [isFloor4Visible, setFloor4Visible] = useState(false);

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
                setFloor4Visible(false);
                break;
            case 1:
                setFloor1Visible(false);
                setFloor2Visible(true);
                setFloor3Visible(false);
                setFloor4Visible(false);
                break;
            case 2:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(true);
                setFloor4Visible(false);
                break;
            case 3:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(true);
                break;
            case 4:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                break;
            default:
                setFloor1Visible(true);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
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

    const CEAFAFloors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];
    

    // const roomVideos = [
    //     { name: 'Room 101',                 videoSrc: 'src/assets/CICSVideos/cics101.mp4' },
    //     { name: 'Room 102',                 videoSrc: 'src/assets/CICSVideos/cics102.mp4' },
    //     { name: 'Room 103',                 videoSrc: 'src/assets/CICSVideos/cics103.mp4' },
    //     { name: 'Room 104',                 videoSrc: 'src/assets/CICSVideos/cics104.mp4' },
    //     { name: 'Room 105',                 videoSrc: 'src/assets/CICSVideos/cics105.mp4' },
    //     { name: 'Room 106',                 videoSrc: 'src/assets/CICSVideos/cics106.mp4' },
    //     { name: 'Room 201',                 videoSrc: 'src/assets/CICSVideos/cics201.mp4' },
    //     { name: 'Room 202',                 videoSrc: 'src/assets/CICSVideos/cics202.mp4' },
    //     { name: 'Room 401',                 videoSrc: 'src/assets/CICSVideos/cics401.mp4' },
    //     { name: 'Room 402',                 videoSrc: 'src/assets/CICSVideos/cics402.mp4' },
    //     { name: 'Room 501',                 videoSrc: 'src/assets/CICSVideos/cics501.mp4' },
    //     { name: 'Room 502',                 videoSrc: 'src/assets/CICSVideos/cics502.mp4' },
    //     { name: 'Room 503',                 videoSrc: 'src/assets/CICSVideos/cics503.mp4' },
    //     { name: 'Room 504',                 videoSrc: 'src/assets/CICSVideos/cics504.mp4' },
    //     { name: 'Room 505',                 videoSrc: 'src/assets/CICSVideos/cics505.mp4' },
    //     { name: 'Room 506',                 videoSrc: 'src/assets/CICSVideos/cics506.mp4' },
    //     { name: 'Accreditation Room',       videoSrc: 'src/assets/CICSVideos/cics_accreditationroom.mp4' },
    //     { name: 'CICS Student Services',    videoSrc: 'src/assets/CICSVideos/cics_cicsss.mp4' },
    //     { name: 'CICSO Laboratory',         videoSrc: 'src/assets/CICSVideos/cics_ciscolab.mp4' },
    //     { name: 'CICS Consultation Room',   videoSrc: 'src/assets/CICSVideos/cics_consultationroom.mp4' },
    //     { name: 'CpE Faculty Room',         videoSrc: 'src/assets/CICSVideos/cics_cpefaculty.mp4' },
    //     { name: 'CpE Laboratory',            videoSrc: 'src/assets/CICSVideos/cics_cpelab.mp4' },
    //     { name: 'Deans Office',             videoSrc: 'src/assets/CICSVideos/cics_deansoffice.mp4' },
    //     { name: 'ICS Faculty Room',         videoSrc: 'src/assets/CICSVideos/cics_icsfaculty.mp4' },
    //     { name: 'ICT Faculty Room',         videoSrc: 'src/assets/CICSVideos/cics_ictfaculty.mp4' },
    //     { name: 'Infotech Room',            videoSrc: 'src/assets/CICSVideos/cics_infotechroom.mp4' },
    //     { name: 'Multimedia Laboratory',    videoSrc: 'src/assets/CICSVideos/cics_multimediaroom.mp4' },
    //     { name: 'Smart Classroom 1',        videoSrc: 'src/assets/CICSVideos/cics_smartclassroom1.mp4' },
    //     { name: 'Smart Classroom 2',        videoSrc: 'src/assets/CICSVideos/cics_smartclassroom2.mp4' },
    //     { name: 'Software Laboratory 1',    videoSrc: 'src/assets/CICSVideos/cics_softwarelab1.mp4' },
    //     { name: 'Software Laboratory 2',    videoSrc: 'src/assets/CICSVideos/cics_softwarelab2.mp4' },
    //     { name: 'Software Laboratory 3',    videoSrc: 'src/assets/CICSVideos/cics_softwarelab3.mp4' },
    //     { name: 'Technician Room',          videoSrc: 'src/assets/CICSVideos/cics_technicianroom.mp4' }
    // ];
    
    
    // const floor1Rooms = [
    //     { name: 'Room 101', videoSrc: 'src/assets/CICSVideos/cics101.mp4' },
    //     { name: 'Room 102', videoSrc: 'src/assets/CICSVideos/cics102.mp4' },
    //     { name: 'Room 103', videoSrc: 'src/assets/CICSVideos/cics103.mp4' },
    //     { name: 'Room 104', videoSrc: 'src/assets/CICSVideos/cics104.mp4' },
    //     { name: 'Room 105', videoSrc: 'src/assets/CICSVideos/cics105.mp4' },
    //     { name: 'Room 106', videoSrc: 'src/assets/CICSVideos/cics106.mp4' }
    // ];
    
    // const floor2Rooms = [
    //     { name: 'Room 201', videoSrc: 'src/assets/CICSVideos/cics201.mp4' },
    //     { name: 'Room 202', videoSrc: 'src/assets/CICSVideos/cics202.mp4' },
    //     { name: 'CpE Faculty Room', videoSrc: 'src/assets/CICSVideos/cics_cpefaculty.mp4' },
    //     { name: 'CICS Student Services', videoSrc: 'src/assets/CICSVideos/cics_cicsss.mp4' },
    //     { name: 'CICS Consultation Room', videoSrc: 'src/assets/CICSVideos/cics_consultationroom.mp4' },
    //     { name: 'ICS Faculty Room', videoSrc: 'src/assets/CICSVideos/cics_icsfaculty.mp4' },
    //     { name: 'Accreditation Room', videoSrc: 'src/assets/CICSVideos/cics_accreditationroom.mp4' },
    //     { name: 'Deans Office', videoSrc: 'src/assets/CICSVideos/cics_deansoffice.mp4' }
    // ];
    
    // const floor3Rooms = [
    //     { name: 'CpE Laboratory', videoSrc: 'src/assets/CICSVideos/cics_cpelab.mp4' },
    //     { name: 'CICSO Laboratory', videoSrc: 'src/assets/CICSVideos/cics_ciscolab.mp4' },
    //     { name: 'MultiMedia Laboratory', videoSrc: 'src/assets/CICSVideos/cics_multimediaroom.mp4' },
    //     { name: 'Software Laboratory 1', videoSrc: 'src/assets/CICSVideos/cics_softwarelab1.mp4' },
    //     { name: 'Software Laboratory 2', videoSrc: 'src/assets/CICSVideos/cics_softwarelab2.mp4' },
    //     { name: 'Software Laboratory 3', videoSrc: 'src/assets/CICSVideos/cics_softwarelab3.mp4' }
    // ];
    
    // const floor4Rooms = [
    //     { name: 'Room 401', videoSrc: 'src/assets/CICSVideos/cics401.mp4' },
    //     { name: 'Room 402', videoSrc: 'src/assets/CICSVideos/cics402.mp4' },
    //     { name: 'Smart Classroom 1', videoSrc: 'src/assets/CICSVideos/cics_smartclassroom1.mp4' },
    //     { name: 'Smart Classroom 2', videoSrc: 'src/assets/CICSVideos/cics_smartclassroom2.mp4' },
    //     { name: 'Technical\'s Room', videoSrc: 'src/assets/CICSVideos/cics_technicianroom.mp4' }
    // ];
    
    // const floor5Rooms = [
    //     { name: 'Room 501', videoSrc: 'src/assets/CICSVideos/cics501.mp4' },
    //     { name: 'Room 502', videoSrc: 'src/assets/CICSVideos/cics502.mp4' },
    //     { name: 'Room 503', videoSrc: 'src/assets/CICSVideos/cics503.mp4' },
    //     { name: 'Room 504', videoSrc: 'src/assets/CICSVideos/cics504.mp4' },
    //     { name: 'Room 505', videoSrc: 'src/assets/CICSVideos/cics505.mp4' },
    //     { name: 'Room 506', videoSrc: 'src/assets/CICSVideos/cics506.mp4' }
    // ];   
    
    const floorRooms = [CEAFARooms.floor1Rooms, CEAFARooms.floor2Rooms, CEAFARooms.floor3Rooms, CEAFARooms.floor4Rooms];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`FloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>floor 1</button>
                    <button className={`FloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`FloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button>
                    <button className={`FloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 4</button>
                    <button className={`FloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 5</button> */}
                    
                    {CEAFAFloors.map((floor, index) => (
                            <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index); currentActiveFloor(floor) }}>{floor} </button>
                        ))}
                
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor1Rooms={CEAFARooms.floor1Rooms}/>}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor2Rooms={CEAFARooms.floor2Rooms}/>}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor3Rooms={CEAFARooms.floor3Rooms}/>}
                    {isFloorContainerVisible && isFloor4Visible && <Floor4 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor4Rooms={CEAFARooms.floor4Rooms}/>}
                </div>
                <button className='closeButton' onClick={() => {toggleFloorSectionVisibility();}}>CLOSE</button>
            </div>

            <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
                <div className='floorPlanLayout'>
                    {/* <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/>
                    {activeButton === 'Room 101' && <video src="src\assets\ifbread.mp4" autoPlay className='floorPlanImage'></video>} */}
                    {/* <div>
                        {activeButton === 'Room 101' && <video src="src\assets\CICS101.mp4" autoPlay className='floorPlanImage zoomed-video'></video>}
                        {activeButton === 'Room 103' && <video src="src\assets\cics103.mp4" autoPlay className='floorPlanImage zoomed-video'></video>}
                    </div> */}
                    {/* <div>
                        {floor1Rooms.map((room, index) => (
                            <div key={index}>
                                {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                            </div>
                        ))}
                    </div>
                    <div>
                        {floor2Rooms.map((room, index) => (
                            <div key={index}>
                                {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                            </div>
                        ))}
                    </div> */}


                        {floorRooms.map((rooms, floorIndex) => (
                            <div key={floorIndex}>
                                {rooms.map((room, roomIndex) => (
                                    <div key={roomIndex}>
                                        {/* <h1>{CICSFloors[floorIndex]}</h1> */}
                                        {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video ceafa-video'></video>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    <h1>CEAFA - {activeFloor}</h1>
                    
                    {/* {activeButton === 'Room 101' && <img src="src\assets\CICS-Floor1.jpg" autoPlay className='floorPlanImage'/>} */}
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}


function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor1Rooms, currentActiveButton}) {
    
    // const floor1Rooms = ['Room 101', 'Room 102', 'Room 103', 'Room 104', 'Room 105', 'Room 106'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 101');}}>Room 101</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 102');}}>Room 102</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 103');}}>Room 103</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 104');}}>Room 104</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 105');}}>Room 105</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 106');}}>Room 106</button> */}
        
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor2Rooms, currentActiveButton}) {
    
    // const floor2Rooms = ['Room 201', 'Room 202', 'CpE Faculty Room', 'CICS Student Services', 'CICS Consultation Room', 'ICS Faculty Room', 'Accreditation Room', 'Deans Office'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Room 201</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Room 202</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>CpE Faculty Room</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>CICS Student Services 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>CICS Consultation Room 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('ICS Faculty Room');}}>ICS Faculty Room</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Accreditation Room 2');}}>Accreditation Room 2 </button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Office of the College Dean 2');}}>Office of the College Dean 2</button> */}
        
            {floor2Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor3Rooms, currentActiveButton}) {
    
    // const floor3Rooms = ['CpE Laboratory', 'CICSO Laboratory', 'MultiMedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>CPE Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>CISCO Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>CpE Faculty Room</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Software Laboratory 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Software Laboratory 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Software Laboratory 3</button> */}
        
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}

function Floor4 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor4Rooms, currentActiveButton}) {
    
    // const floor4Rooms = ['Room 401', 'Room 402', 'Smart Classroom 1', 'Smart Classroom 2', 'Technician Room'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 401');}}>Room 401</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Smart Classroom 1');}}>Smart Classroom 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Smart Classroom 2');}}>Smart Classroom 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Technical\'s Room');}}>Technical's Room</button> */}
        
            {floor4Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room.name) }}>{room.name} </button>
                ))}
        
        </div>
    )
}



export default CEAFABuilding