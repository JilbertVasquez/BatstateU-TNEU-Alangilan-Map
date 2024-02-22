import './BuildingLayout.css'

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

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>Lower Ground</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 1</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 2</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 3</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 4</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 5 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(5) }}>floor 5</button>
                </div>
                <div className='roomHeader'> 
                    {isFloorContainerVisible && isLowerGroundVisible && <LowerGround toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton}/>}
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
                    {/* <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/> */}
                    {activeButton === 'Room 101' && <video src="src\assets\ifbread.mp4" autoPlay className='floorPlanImage'></video>}
                    {activeButton === 'Room 401' && <video src="src\assets\summer.mp4" autoPlay className='floorPlanImage'></video>}
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}


function LowerGround ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const LowerGround = ['Mechanical Technology', 'Faculty', 'Storage', 'Mechanical And Automotive Shop'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 101');}}>Mechanical Technology</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 102');}}>Faculty</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 103');}}>Storage</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 104');}}>Mechanical And Automotive Shop</button> */}
        
            {LowerGround.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
            ))}
        </div>
    )
}

function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor1Rooms = ['Eletronic Shop', 'Electronic Technology Shop', 'Instrumentation And Control', 'Physics Lab', 'Food Tech', 'Scholarship And financial Assistance Office / Accreditation Room'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Electronic Shop');}}>Electronic Shop</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Electornic Technology Shop');}}>Electornic Technology Shop</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Instrumentation And Control');}}>Instrumentation And Control</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Physics Lab');}}>Physics Lab</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Food Tech');}}>Food Tech</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Scholarship And Financial Assistance Office / Accreditation Room');}}>Scholarship And Financial Assistance Office / Accreditation Room</button> */}
        
            {floor1Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        </div>
    )
}

function Floor2 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor2Rooms = ['Deans Office', 'Faculty 1', 'Faculty 2', 'Multi-Media Room 1', 'Multi-Media Room 2', 'Extension Services'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Dean's Office</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Faculty 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Faculty 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>Multi-Media Room 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Multi-Media Room 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Extention Services</button> */}

            {floor2Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
            ))}

        </div>
    )
}

function Floor3 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor3Rooms = ['Com Lab 1', 'Com Lab 2', 'Com Lab 3', 'ELDC', 'Smart Classroom', 'Reasearch Office'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Com Lab 1</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Room 201');}}>Com Lab 2</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Com Lab 3</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Student Services 1');}}>ELDC</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Smart Classroom</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CICS Consultation Room 1');}}>Reasearch Office</button> */}
        
            {floor3Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}

        </div>
    )
}

function Floor4 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor4Rooms = ['Room 401', 'Room 402', 'Room 403', 'Room 404', 'Room 405', 'OSAS'];

    return (
        <div className='roomHeader'>
        {/* //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>Room 401</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>Room 402</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Room 403</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Room 404</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Room 405</button>
        //     <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>OSAS</button> */}

            {floor4Rooms.map((room, index) => (
                <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
            ))}
        </div>
    )
}


function Floor5 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, currentActiveButton}) {
    
    const floor5Rooms = ['Room 501', 'Room 502', 'Room 503', 'Room 504', 'Room 505'];

    return (
        <div className='roomHeader'>
            {/* <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CPE Laboratory');}}>Room 501</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CISCO Laboratory');}}>Room 502</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('CpE Faculty Room');}}>Room 503</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 1');}}>Room 504</button>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton('Software Laboratory 2');}}>Room 505</button> */}
        
            {floor5Rooms.map((room, index) => (
                    <button key={index} onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); currentActiveButton(room) }}>{room} </button>
                ))}
        
        </div>
    )
}




export default CITBuilding