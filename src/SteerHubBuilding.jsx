import './BuildingLayout.css'

import React, { useState, useRef } from 'react';

function SteerHubBuilding() {

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

    const SteerHubFloors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    {/* <button className={`FloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0) }}>floor 1</button>
                    <button className={`FloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`FloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button>
                    <button className={`FloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 4</button>
                    <button className={`FloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 5</button> */}
                    
                    {SteerHubFloors.map((floor, index) => (
                            <button key={index} className={`FloorButtons ${lastClickedIndex === index ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(index) }}>{floor} </button>
                        ))}
                
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 />}
                    {isFloorContainerVisible && isFloor2Visible && <Floor2 />}
                    {isFloorContainerVisible && isFloor3Visible && <Floor3 />}
                    {isFloorContainerVisible && isFloor4Visible && <Floor4 />}
                    {isFloorContainerVisible && isFloor5Visible && <Floor5 />}
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


function Floor1 () {
    return (
        <div className='roomHeader steerhub'>
            <h1>Floor Plan not available.</h1>
        </div>
    )
}

function Floor2 () {
    return (
        <div className='roomHeader steerhub'>
            <h1>Floor Plan not available.</h1>
        </div>
    )
}

function Floor3 () {
    return (
        <div className='roomHeader steerhub'>
            <h1>Floor Plan not available.</h1>
        </div>
    )
}

function Floor4 () {
    return (
        <div className='roomHeader steerhub'>
            <h1>Floor Plan not available.</h1>
        </div>
    )
}

function Floor5 () {
    return (
        <div className='roomHeader steerhub'>
            <h1>Floor Plan not available.</h1>
        </div>
    )
}

export default SteerHubBuilding