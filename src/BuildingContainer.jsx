import './BuildingContainer.css'


import React, { useState } from 'react';

function BuildingContainer({ toggleFloorContainer }) {

    // List of Buildings -> Floors -> Rooms
    const buildings = [
        {name: "CEAFA", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "CICS", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "CIT", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "RGR", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
        ]},
        {name: "GYM", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["ICT Offices", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
        ]},
        {name: "STEER HUB", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 301", "Room 302", "Room 303", "Room 304", "Room 305"]},
            {name: "Floor 4", rooms: ["Room 401", "Room 402", "Room 403", "Room 404", "Room 405"]},
            {name: "Floor 5", rooms: ["Room 501", "Room 502", "Room 503", "Room 504", "Room 505"]},
        ]},
        {name: "STUDENT SERVICES", 
        floors: [
            {name: "Floor 1", rooms: ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105"]},
            {name: "Floor 2", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
            {name: "Floor 3", rooms: ["Room 201", "Room 202", "Room 203", "Room 204", "Room 205"]},
        ]},
    ]

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
        for (const [buildingIndex, building] of buildings.entries()) {
        for (const [floorIndex, floor] of building.floors.entries()) {
            if (floor.rooms.includes(searchRoom)) {
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
        const offices = e.target.value;
        setSearchTerm(offices);
        handleSearch(offices);
    };

    

return (
    <div className='buildingContainer'>
        <img id = "bsulogo" src="src\assets\batstateu-tneu-logo.png" alt="bsu-tneu-logo" />
        <input id = 'search-id'
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
        />
        {buildingInfo ? (
            <div>
                {console.log(buildingInfo.buildingName)}
                <button className={lastClickedIndex === buildingInfo.buildingIndex ? "toggled" : ""} onClick={() => {toggleBackgroundButton(buildingIndex); toggleFloorContainer(buildingIndex) }}>{buildingInfo.buildingName}</button>
                {/* <button>See details...</button> */}
            </div>
            ) : (
            
            <div id = "button-container">
                    {buildings.map((building, index) => (
                        <div key={index}>
                            <button className={lastClickedIndex === index ? "toggled" : ""} onClick={() => {toggleBackgroundButton(index); toggleFloorContainer(index) }}>{building.name} </button>

                        </div>
                    ))}

                    
                    
                </div>
            )}
    </div>
    );
}

export default BuildingContainer