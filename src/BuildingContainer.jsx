import './BuildingContainer.css'
import * as buildings from './BuildingInfo';

import React, { useState } from 'react';
// Define the list of buildings and their corresponding floors
const buildingList = [
    { name: 'CEAFA', floors: [buildings.floor1Rooms_CEAFA, buildings.floor2Rooms_CEAFA, buildings.floor3Rooms_CEAFA, buildings.floor4Rooms_CEAFA] },
    { name: 'CICS', floors: [buildings.floor1Rooms_CICS, buildings.floor2Rooms_CICS, buildings.floor3Rooms_CICS, buildings.floor4Rooms_CICS, buildings.floor5Rooms_CICS] },
    { name: 'CIT', floors: [buildings.LowerGround_CIT, buildings.floor1Rooms_CIT, buildings.floor2Rooms_CIT, buildings.floor3Rooms_CIT, buildings.floor4Rooms_CIT, buildings.floor5Rooms_CIT] },
    { name: 'GYM', floors: [buildings.floor1Rooms_GYM, buildings.floor2Rooms_GYM, buildings.floor3Rooms_GYM] },
    { name: 'RGR', floors: [buildings.floor1Rooms_RGR, buildings.floor2Rooms_RGR, buildings.floor3Rooms_RGR] },
    { name: 'Student Services', floors: [buildings.floor1Rooms_SSC, buildings.floor2Rooms_SSC, buildings.floor3Rooms_SSC] }
];

// Function to search for a room in all buildings and floors
const searchRoom = (keyword) => {
    if (!keyword.trim()) {
        return [];
    }

    const results = [];

    buildingList.forEach((building) => {
        const buildingName = building.name;
        const buildingFloors = building.floors;

        buildingFloors.forEach((floor, index) => {
            floor.forEach((room) => {
                // Check if the room name starts with the search keyword
                if (room.toLowerCase().startsWith(keyword.toLowerCase())) {
                    results.push({ room: room, building: buildingName, floor: `Floor ${index + 1}` });
                }
            });
        });
    });

    return results;
};

// Define a component to display search results
const SearchResults = ({ results, lastClickedIndex, toggleBackgroundButton, toggleSearchFloorContainer, updateRoomInfo, hideDefaultFloor }) => {
    return (
        <div className="search-results">
            {results.map((result, index) => (
                // <li key={index}>
                //     <strong>Building:</strong> {result.building}, <strong>Floor:</strong> {result.floor}, <strong>Room:</strong> {result.room}
                // </li>
                <button key={index} className={`buildingButton ${lastClickedIndex === index ? "toggled" : ""}`}  onClick={() => {toggleBackgroundButton(index); toggleSearchFloorContainer(index, result); updateRoomInfo(result); hideDefaultFloor(); }} >
                    {result.room}
                </button>
                        
            ))}
        </div>
    );
};

function BuildingContainer({ toggleFloorContainer, buildingList, activateBuildingMap, toggleSearchFloorContainer, updateRoomInfo, hideSearchFloor, hideDefaultFloor}) {

    const buildings = buildingList;

    // Toggle Background color of button
    const [lastClickedIndex, setLastClickedIndex] = useState();

    function toggleBackgroundButton(index) {
    
        if (lastClickedIndex === index) {
            setLastClickedIndex(null);
        } 
        else {
            setLastClickedIndex(index);
        }
    }

    function backToNone() {
    
        setLastClickedIndex(null);
    }

    // return(
    //     <div className='buildingContainer'>
    //         <img id = "bsulogo" src="src\assets\batstateu-tneu-logo.png" alt="bsu-tneu-logo" />
    //         <input type = 'search' placeholder='Search...' name = 'search-building' id = 'search-id'></input>
    //     </div>
    // );

    // useState for Search Function
    const [keyword, setKeyword] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    // Call searchRoom function with the keyword
    const searchResults = searchRoom(keyword);
    

return (
    <div className='buildingContainer'>
        <img id = "bsulogo" src="src\assets\batstateu-tneu-logo.png" alt="bsu-tneu-logo" />
        {/* <input id='search-id' type="search" value={keyword} onChange={handleInputChange} placeholder="search office here..." /> */}
        <input id='search-id' type="search" value={keyword} onChange={(event) => { handleInputChange(event); backToNone(); }} placeholder="search office here..." />
        {searchResults.length > 0 ? (
            <div className= 'buttonContainer'>
                {keyword.trim() && <SearchResults results={searchResults} lastClickedIndex={lastClickedIndex} toggleBackgroundButton={toggleBackgroundButton} toggleSearchFloorContainer={toggleSearchFloorContainer} updateRoomInfo={updateRoomInfo} hideDefaultFloor={hideDefaultFloor} />}
                {/* {
                    searchResults.forEach(element => {
                        console.log(element.floor);
                    })
                } */}
            </div>
            ) : (
            
            <div className = "buttonContainer">
                    {buildings.map((building, index) => (
                        <div className="buttons" key={index}>
                            <button className={`buildingButton ${lastClickedIndex === index ? "toggled" : ""}`} onClick={() => {toggleBackgroundButton(index); toggleFloorContainer(building.name, index); activateBuildingMap(building.name); hideSearchFloor(); }}>{building.name} </button>
                        </div>
                    ))}

                    
                    
                </div>
            )}
            {/* <button onClick={handleClearSearch}>Clear</button> */}
    </div>
    );
}

export default BuildingContainer