import './BuildingLayout.css'

import React, { useState, useRef } from 'react';

function CICSBuilding() {

    const [lastClickedIndex, setLastClickedIndex] = useState(0);
    const [isFloor1Visible, setFloor1Visible] = useState(true);
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
                setFloor1Visible(true);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 1:
                setFloor1Visible(false);
                setFloor2Visible(true);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 2:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(true);
                setFloor4Visible(false);
                setFloor5Visible(false);
                break;
            case 3:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(true);
                setFloor5Visible(false);
                break;
            case 4:
                setFloor1Visible(false);
                setFloor2Visible(false);
                setFloor3Visible(false);
                setFloor4Visible(false);
                setFloor5Visible(true);
                break;
            default:
                setFloor1Visible(true);
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

    const CICSFloors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`FloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>floor 1</button>
                    <button className={`FloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`FloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button>
                    <button className={`FloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 4</button>
                    <button className={`FloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 5</button> */}
                    
                    {CICSFloors.map((floor, index) => (
                            <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index) }}>{floor} </button>
                        ))}
                
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
                    {isFloorContainerVisible && isFloor4Visible && <Floor4 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
                    {isFloorContainerVisible && isFloor5Visible && <Floor5 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
                </div>
                <button className='closeButton' onClick={() => {toggleFloorSectionVisibility();}}>CLOSE</button>
            </div>

            <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
                <div className='floorPlanLayout'>
                    {/* <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/>
                    {activeButton === 'Room 101' && <video src="src\assets\ifbread.mp4" autoPlay className='floorPlanImage'></video>} */}
                    <div>
                        {activeButton === 'Room 101' && <video src="src\assets\CICS101.mp4" autoPlay className='floorPlanImage zoomed-video'></video>}
                        {activeButton === 'Room 103' && <video src="src\assets\cics103.mp4" autoPlay className='floorPlanImage zoomed-video'></video>}
                    </div>
                    {/* {activeButton === 'Room 101' && <img src="src\assets\CICS-Floor1.jpg" autoPlay className='floorPlanImage'/>} */}
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}


function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor1Rooms = ['Room 101', 'Room 102', 'Room 103', 'Room 104', 'Room 105', 'Room 106'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 101');}}>Room 101</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 102');}}>Room 102</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 103');}}>Room 103</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 104');}}>Room 104</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 105');}}>Room 105</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 106');}}>Room 106</button> */}
        
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor2Rooms = ['Room 201', 'Room 202', 'CpE Faculty Room', 'CICS Student Services', 'CICS Consultation Room', 'ICS Faculty Room', 'Accreditation Room', 'Deans Office'];

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
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor3Rooms = ['CpE Laboratory', 'CICSO Laboratory', 'MultiMedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>CPE Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>CISCO Laboratory</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>CpE Faculty Room</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Software Laboratory 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Software Laboratory 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Software Laboratory 3</button> */}
        
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}

function Floor4 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor4Rooms = ['Room 401', 'Room 402', 'Smart Classroom 1', 'Smart Classroom 2', 'Technical\'s Room'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 401');}}>Room 401</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Smart Classroom 1');}}>Smart Classroom 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Smart Classroom 2');}}>Smart Classroom 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Technical\'s Room');}}>Technical's Room</button> */}
        
            {floor4Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}

function Floor5 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor5Rooms = ['Room 501', 'Room 502', 'Room 503', 'Room 504', 'Room 505', 'Room 506'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 501');}}>Room 501</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 502');}}>Room 502</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 503');}}>Room 503</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 504');}}>Room 504</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 505');}}>Room 505</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 506');}}>Room 506</button>
         */}
            {floor5Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}



export default CICSBuilding