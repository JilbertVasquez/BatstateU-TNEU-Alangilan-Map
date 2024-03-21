import './Kiosk.css';
import React from 'react';

function Kiosk() {
  const buildings = [
    'GATE',
    'CEAFA',
    'CICS',
    'CIT',
    'RGR',
    'GYM',
    'STEERHUB',
    'STUDENT SERVICES'
  ];

  return (
    <div className={'kioskContainer'}>
        <h1>Where Kiosk are you?</h1>
        <div className='kioskBuildingList'>
            
                {buildings.map((building, index) => (
                    <button className='kioskButton' key={index}>{building}</button>
                ))}
        </div>
    </div>
  );
}

export default Kiosk;
