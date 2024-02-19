import './CICSBuilding.css'

import React, { useState } from 'react';

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

    // toggled room after using search function
    const [searchTerm, setSearchTerm] = useState('');
    const [matchingButtons, setMatchingButtons] = useState([]);

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase(); // Convert search term to lowercase
        setSearchTerm(searchText);

        const buttons = Array.from(document.querySelectorAll('.roomHeader button'));
        const matchingButtons = buttons.filter(button => button.textContent.toLowerCase().includes(searchText));
        setMatchingButtons(matchingButtons);
    }

    

    return(
        <div className={isFloorSectionVisible ? 'floorSection' : 'floorSection-hidden'}>
            <div className={isFloorContainerVisible ? 'floorContainer' : 'floorContainer-hidden'}>
                <div className='floorHeader'>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 0 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(0); toogleFloorPlanVisibility }}>floor 1</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 1 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(1) }}>floor 2</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 2 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(2) }}>floor 3</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 3 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(3) }}>floor 4</button>
                    <button className={`CICSFloorButtons ${lastClickedIndex === 4 ? "floorButtonToggled" : ""}`}  onClick={() => { roomContainerVisible(4) }}>floor 5</button>
                </div>
                <div className='roomHeader'>
                    {isFloorContainerVisible && isFloor1Visible && <Floor1 toggleFloorContainerVisibility={toggleFloorContainerVisibility} toogleFloorPlanVisibility={toogleFloorPlanVisibility}/>}
                    {isFloor2Visible && <Floor2 />}
                    {isFloor3Visible && <Floor3 />}
                    {isFloor4Visible && <Floor4 />}
                    {isFloor5Visible && <Floor5 />}
                </div>

                {/* <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
                    <p>Matching buttons:</p>
                    <ul>
                        {matchingButtons.map((button, index) => (
                            <li key={index}>{button.textContent}</li>
                        ))}
                    </ul>
                </div> */}
                <button className='closeButton' onClick={toggleFloorSectionVisibility}>CLOSE</button>
            </div>

            <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
                <div className='floorPlanLayout'>
                    <img src="src/assets/Alangilan-pathway.jpg" alt="dummyphoto" className='floorPlanImage'/>
                </div>
                <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>BACK</button>
            </div>
        </div>
    )
}

function Floor1 ({toggleFloorContainerVisibility, toogleFloorPlanVisibility}) {
    
    return (
        <div className='roomHeader'>
            <button onClick={() => { toggleFloorContainerVisibility(); toogleFloorPlanVisibility(); }}>Room 101</button>
            <button>Room 102</button>
            <button>Room 103</button>
            <button>Room 104</button>
            <button>Room 105</button>
            <button>Room 106</button>
        </div>
    )
}

function Floor2 () {
    
    return (
        <div className='roomHeader'>
            <button>Room 201</button>
            <button>Room 202</button>
            <button>CpE Faculty Room</button>
            <button>CICS Student Services 1</button>
            <button>CICS Consultation Room 1</button>
            <button>ICS Faculty Room</button>
            <button>Accreditation Room 2 </button>
            <button>Office of the College Dean 2</button>
        </div>
    )
}

function Floor3 () {
    
    return (
        <div className='roomHeader'>
            <button>CPE Laboratory</button>
            <button>CISCO Laboratory</button>
            <button>CpE Faculty Room</button>
            <button>Software Laboratory 1</button>
            <button>Software Laboratory 2</button>
            <button>Software Laboratory 3</button>
        </div>
    )
}

function Floor4 () {
    
    return (
        <div className='roomHeader'>
            <button>Room 401</button>
            <button>Smart Classroom 1</button>
            <button>Smart Classroom 2</button>
            <button>Technical's Room</button>
        </div>
    )
}

function Floor5 () {
    
    return (
        <div className='roomHeader'>
            <button>Room 501</button>
            <button>Room 502</button>
            <button>Room 503</button>
            <button>Room 504</button>
            <button>Room 505</button>
            <button>Room 506</button>
        </div>
    )
}



export default CICSBuilding