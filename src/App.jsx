import React, { useState } from 'react';
import * as buildings from './BuildingInfo';

// // CEAFA Building

// // 1st Floor
// const floor1Rooms_CEAFA = [
//     'RGO',
//     'Executive Lounge',
//     'CEAFA Lounge',
//     'Audio Visual Room',
//     'Electronics System Laboratory',
//     'Faculty',
//     'Mechatronics And Robotics Laboratory',
//     'Signal And System Laboratory',
//     'Power Electronics And Mechatronics Education Center',
//     'Electronics System Laboratory',
//     'BHIVE',
//     'PFMO',
//     'ECE Consultation Room',
//     'University Shop',
//     'Petroleum Engineering Laboratory',
//     'Chemistry Laboratory',
//     'Mechanical Measurement And Material Testing Laboratory',
//     'HVAC Laboratory',
//     'M.E. Consultation Room',
//     'CAD Laboratory'
// ];

// // 2nd Floor
// const floor2Rooms_CEAFA = [
//     'Library',
//     'Faculty Room 1',
//     'Room 207',
//     'Room 208',
//     'Room 209',
//     'Room 210',
//     'Room 211',
//     'Room 212',
//     'Conference Room',
//     'COE STAFF',
//     'Department Chair Office',
//     'Faculty Room 2',
//     'Faculty Room 3',
//     'Smart Classroom',
//     'Department Chair Office',
//     'ETEEAP OFFICE',
//     'VCAA OFFICE',
//     'Faculty Room 4'
// ];

// // 3rd Floor
// const floor3Rooms_CEAFA = [
//     'COE SC',
//     'ROOM 302 B',
//     'ROOM 304',
//     'ROOM 305',
//     'COMPUTER LABORATORY 1',
//     'COMPUTER LABORATORY 2',
//     'COMPUTER LABORATORY 3',
//     'IE CONSULTATION LABORATORY',
//     'INDUSTRIAL ENGINEERING LABORATORY',
//     'PHYSICS LABORATORY',
//     'CAFAD FACULTY ROOM',
//     'ROOM 302 A',
//     'CAFAD DEANS OFFICE'
// ];

// // 4th Floor
// const floor4Rooms_CEAFA = [
//     'EE SUPPLY ROOM',
//     'CIRCUITS LABORATORY',
//     'MACHINE LABORATORY',
//     'EE CONSULTATION ROOM',
//     'FACULTY 5',
//     'ROOM 416',
//     'ROOM 313',
//     'ROOM 314',
//     'AMPITHEATER',
//     'ROOM 415',
//     'ROOM 415',
//     'CHE CONSULTATION ROOM',
//     'CHEMICAL ENGINEERING LABORATORY',
//     'ANALYTICAL LABORATORY',
//     'INSTRUMENTATION LABORATORY',
//     'FOOD LABORATORY',
//     'ROOM 402',
//     'ROOM 401'
// ];

// // CICS Building

// // Floor 1
// const floor1Rooms_CICS = ['Room 101', 'Room 102', 'Room 103', 'Room 104', 'Room 105', 'Room 106'];

// // Floor 2
// const floor2Rooms_CICS = ['Room 201', 'Room 202', 'CpE Faculty Room', 'CICS Student Services', 'CICS Consultation Room', 'ICS Faculty Room', 'Accreditation Room', 'Deans Office'];

// // Floor 3
// const floor3Rooms_CICS = ['CpE Laboratory', 'CICSO Laboratory', 'MultiMedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3'];

// // Floor 4
// const floor4Rooms_CICS = ['Room 401', 'Room 402', 'Smart Classroom 1', 'Smart Classroom 2', 'Technician Room'];

// // Floor 5
// const floor5Rooms_CICS = ['Room 501', 'Room 502', 'Room 503', 'Room 504', 'Room 505', 'Room 506'];


// // CIT Building

// // Lower Ground
// const LowerGround_CIT = ['Mechanical Technology', 'Faculty', 'Mechanical And Automotive Shop', 'Deans Extension'];

// // 1st Floor
// const floor1Rooms_CIT = ['Electronic Shop', 'Electronic Technology Shop', 'Instrumentation And Control', 'Physics Lab', 'Food Tech', 'Scholarship And Financial Assistance Office / Accreditation Room'];

// // 2nd Floor
// const floor2Rooms_CIT = ['Deans Office', 'Faculty 1', 'Faculty 2', 'Multi-Media Room 1', 'Multi-Media Room 2', 'Extension Services'];

// // 3rd Floor
// const floor3Rooms_CIT = ['Com Lab 1', 'Com Lab 2', 'Com Lab 3', 'ELDC', 'Smart Classroom', 'Research Office'];

// // 4th Floor
// const floor4Rooms_CIT = ['Room 401', 'Room 402', 'Room 403', 'Room 404', 'Room 405', 'OSAS'];

// // 5th Floor
// const floor5Rooms_CIT = ['Room 501', 'Room 502', 'Room 503', 'Room 504', 'Room 505'];

// // GYM Building

// // 1st Floor
// const floor1Rooms_GYM = [
//     'Procurement Office FDC 101',
//     'Culture And Arts FDC 102',
//     'Sports Development FDC 102',
//     'PE Faculty 103',
//     'FDC 104',
//     'Locker Room Team A',
//     'Locker Room Team B',
//     'Storage Room Right Side',
//     'Dancer Locker Room Right Side',
//     'Dancer Locker Room Left Side',
//     'Multi Purpose Room',
//     'Monitoring Office',
//     'Clinic'
// ];

// // 2nd Floor
// const floor2Rooms_GYM = ['NSTP Office', 'Control Room', 'OJT Office', 'Student Discipline', 'ICT Office'];

// // 3rd Floor
// const floor3Rooms_GYM = ['Dance Studio', 'Fitness Gym', 'Storage Room'];

// // RGR Building

// // Floor 1
// const floor1Rooms_RGR = ['Hydraulics Laboratory', 'Soil Laboratory', 'Environmental Laboratory'];

// // Floor 2
// const floor2Rooms_RGR = ['Faculty Room 1', 'RGR 201', 'RGR 202', 'RGR 203', 'Faculty Room 2'];

// // Floor 3
// const floor3Rooms_RGR = ['Faculty / Consultation Room', 'RGR 302', 'RGR 303'];

// // SSC Building

// // Floor 1
// const floor1Rooms_SSC = ['Accounting', 'Budget Office', 'Cashier', 'Commission on Audit Office'];

// // Floor 2
// const floor2Rooms_SSC = ['Record Office', 'TAO', 'Registrar Office Storeroom', 'Office of the Registrar'];

// // Floor 3
// const floor3Rooms_SSC = [
//     'Office of the Chancellor for Administration and Finance',
//     'Office of the Vice Chancellor for Development and External Affairs',
//     'Human Resource Management Office',
//     'Office of the Vice Chancellor',
//     'Internal Audit Services',
//     'AXIS',
//     'ISO Office',
//     'Quality Assurance Management Office',
//     'Record Management Office'
// ];


// Define the list of buildings and their corresponding floors
const buildingList = [
    { name: 'CEAFA', floors: [buildings.floor1Rooms_CEAFA, buildings.floor2Rooms_CEAFA, buildings.floor3Rooms_CEAFA, buildings.floor4Rooms_CEAFA] },
    { name: 'CICS', floors: [buildings.floor1Rooms_CICS, buildings.floor2Rooms_CICS, buildings.floor3Rooms_CICS, buildings.floor4Rooms_CICS, buildings.floor5Rooms_CICS] },
    { name: 'CIT', floors: [buildings.LowerGround_CIT, buildings.floor1Rooms_CIT, buildings.floor2Rooms_CIT, buildings.floor3Rooms_CIT, buildings.floor4Rooms_CIT, buildings.floor5Rooms_CIT] },
    { name: 'GYM', floors: [buildings.floor1Rooms_GYM, buildings.floor2Rooms_GYM, buildings.floor3Rooms_GYM] },
    { name: 'RGR', floors: [buildings.floor1Rooms_RGR, buildings.floor2Rooms_RGR, buildings.floor3Rooms_RGR] },
    { name: 'SSC', floors: [buildings.floor1Rooms_SSC, buildings.floor2Rooms_SSC, buildings.floor3Rooms_SSC] }
];

// Function to search for a room in all buildings and floors
const searchRoom = (keyword) => {
    if (!keyword.trim()) {
        return []; // Return an empty array if keyword is empty or contains only whitespace
    }

    // const results = [];

    // buildingList.forEach((building) => {
    //     const buildingName = building.name;
    //     const buildingFloors = building.floors;

    //     buildingFloors.forEach((floor, index) => {
    //         const matchingRooms = floor.filter((room) => room.toLowerCase().includes(keyword.toLowerCase()));

    //         if (matchingRooms.length > 0) {
    //             matchingRooms.forEach((matchedRoom) => {
    //                 results.push({ room: matchedRoom, building: buildingName, floor: `Floor ${index + 1}` });
    //             });
    //         }
    //     });
    // });

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
const SearchResults = ({ results }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map((result, index) => (
                    // <li key={index}>
                    //     <strong>Building:</strong> {result.building}, <strong>Floor:</strong> {result.floor}, <strong>Room:</strong> {result.room}
                    // </li>
                    <button key={index}>
                        {result.room}
                    </button>
                ))}
            </ul>
        </div>
    );
};

// Main App component
const App = () => {
    const [keyword, setKeyword] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    // Call searchRoom function with the keyword
    const searchResults = searchRoom(keyword);

    return (
        <div>
            <h1>Search Results</h1>
            <input type="text" value={keyword} onChange={handleInputChange} placeholder="Enter keyword..." />
            {keyword.trim() && <SearchResults results={searchResults} />} {/* Display search results only if keyword is not empty */}
        </div>
    );
};

export default App;
