import './BuildingContainer.css'


import React, { useState } from 'react';

function BuildingContainer({ toggleFloorContainer, buildingList}) {

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

    // return(
    //     <div className='buildingContainer'>
    //         <img id = "bsulogo" src="src\assets\batstateu-tneu-logo.png" alt="bsu-tneu-logo" />
    //         <input type = 'search' placeholder='Search...' name = 'search-building' id = 'search-id'></input>
    //     </div>
    // );

    // useState for Search Function
    const [searchTerm, setSearchTerm] = useState('');
    const [buildingInfo, setBuildingInfo] = useState(null);

    const handleSearch = (searchRoom) => {
        searchRoom = searchRoom.toUpperCase();
        for (const [buildingIndex, building] of buildings.entries()) {
        for (const [floorIndex, floor] of building.floors.entries()) {
            const upperCaseRooms = floor.rooms.map(room => room.toUpperCase());
            
            if (upperCaseRooms.includes(searchRoom)) {
            setBuildingInfo({ 
                buildingName: building.name, 
                buildingIndex: buildingIndex,
                floorName: floor.name, 
                floorIndex: floorIndex, 
                searchRoom: searchRoom });

                return;
            }
        }
        }
        setBuildingInfo(null);
    };

    const handleChange = (e) => {
        const offices = e.target.value.toLowerCase();
        setSearchTerm(offices);
        handleSearch(offices);

    };
    

return (
    <div className='buildingContainer'>
        <img id = "bsulogo" src="src\assets\batstateu-tneu-logo.png" alt="bsu-tneu-logo" />
        <input id = 'search-id'
            type="search"
            placeholder="search office here..."
            value={searchTerm}
            onChange={handleChange}
        />
        {buildingInfo ? (
            <div className= "buttonContainer">
                {console.log(buildingInfo.buildingIndex)}
                {console.log(lastClickedIndex)}
                <button className={`buildingButton ${lastClickedIndex === buildingInfo.buildingIndex ? "" : "toggledButtonSearch"}`} onClick={() => {toggleBackgroundButton(buildingInfo.buildingIndex); toggleFloorContainer(buildingInfo.buildingIndex) }}>{buildingInfo.buildingName}</button>
                {/* <button>See details...</button> */}
            </div>
            ) : (
            
            <div className = "buttonContainer">
                    {buildings.map((building, index) => (
                        <div key={index}>
                            <button className={`buildingButton ${lastClickedIndex === index ? "toggled" : ""}`} onClick={() => {toggleBackgroundButton(index); toggleFloorContainer(index) }}>{building.name} </button>

                        </div>
                    ))}

                    
                    
                </div>
            )}
            <button >CLOSE</button>
    </div>
    );
}

export default BuildingContainer