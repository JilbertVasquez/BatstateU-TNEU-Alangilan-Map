import './BuildingLayout.css'

import React, { useState, useRef } from 'react';

function SearchRoom({ searchRoomInfo }) {

    const [isFloorContainerVisible, setFloorContainerVisible] = useState(true);

    const [isFloorPlanVisible, setFloorPlanVisible] = useState(true);

    const toggleFloorContainerVisibility = () => {
        setFloorContainerVisible(!isFloorContainerVisible);
    };

    const toogleFloorPlanVisibility = () => {
        setFloorPlanVisible(!isFloorPlanVisible);
    };

    return(
        <div className={isFloorPlanVisible ? 'floorPlanContainer' : 'floorPlanContainer-hidden'}>
            <div className='floorPlanLayout'>
                <h1>HELLO WORLD</h1>
                {console.log(searchRoomInfo[0])}
                {/* <img src="src\assets\3dcampusv2.jpg" alt="campusmap" /> */}
            </div>
            <button className='closeButton' onClick={() => {toogleFloorPlanVisibility(); toggleFloorContainerVisibility(); }}>CLOSE</button>
        </div>
    )
}


export default SearchRoom