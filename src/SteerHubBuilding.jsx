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

    const toggleFloorSectionVisibility = () => {
        setFloorSectionVisible(!isFloorSectionVisible);
    };

    const SteerHubFloors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'];

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={'floorContainer'}>
                <div className='floorHeader'>
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