import './BuildingLayout.css'
import * as CEAFARooms from './CEAFAInfo';

import React, { useState, useRef } from 'react';

function CEAFABuilding() {

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

    const [activeFloor, setActiveFloor] = useState('Floor 1');

    const currentActiveFloor = (floor) => {
        setActiveFloor(floor);
    };

    const CEAFAFloors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];
    
    const floorRooms = [CEAFARooms.floor1Rooms, CEAFARooms.floor2Rooms, CEAFARooms.floor3Rooms, CEAFARooms.floor4Rooms];

    




    // toggled room after using search function
    // const [searchTerm, setSearchTerm] = useState('');
    // const [matchingButtons, setMatchingButtons] = useState([]);

    // const handleSearch = (event) => {
    //     const searchText = event.target.value.toLowerCase(); // Convert search term to lowercase
    //     setSearchTerm(searchText);
        

    //     const buttons = Array.from(document.querySelectorAll('.roomHeader button'));
    //     const matchingButtons = buttons.filter(button => button.textContent.toLowerCase().includes(searchText));
    //     setMatchingButtons(matchingButtons);
    // }

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`FloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0); toogleFloorPlanVisibility }}>floor 1</button>
                    <button className={`FloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`FloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button>
                    <button className={`FloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 4</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 5</button> */}
                
                    {CEAFAFloors.map((floor, index) => (
                        <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index);  currentActiveFloor(floor) }}>{floor} </button>
                    ))}
                
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor1Rooms={CEAFARooms.floor1Rooms}/>}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor2Rooms={CEAFARooms.floor2Rooms} />}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor3Rooms={CEAFARooms.floor3Rooms}/>}
                    {isFloorContainerVisible && isFloor4Visible && <Floor4 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility} currentActiveButton={currentActiveButton} floor4Rooms={CEAFARooms.floor4Rooms}/>}
                </div>

                {/* <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
                    <ul>
                        {matchingButtons.map((button, index) => (
                            <li key={index}>{button.textContent}</li>
                        ))}
                    </ul>
                </div> */}
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
                                            {/* <h1>{CICSFloors[floorIndex]}</h1> */}
                                            {activeButton === room.name && <video src={room.videoSrc} autoPlay className='floorPlanImage zoomed-video'></video>}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        <h1>CEAFA - {activeFloor}</h1>
                
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}

function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility, floor1Rooms, currentActiveButton}) {
    
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