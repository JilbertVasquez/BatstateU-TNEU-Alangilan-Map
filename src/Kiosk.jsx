import './Kiosk.css';
import React from 'react';

function Kiosk({ selectCurrentKiosk, showKiosk }) {
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
    <div className= {`kioskContainer ${showKiosk ? '' : 'notshow'}`}>
        <h1>Where Kiosk are you?</h1>
        <div className='kioskBuildingList'>
            
                {buildings.map((building, index) => (
                    <button key={index} className='kioskButton' onClick={() => selectCurrentKiosk(building)} >{building}</button>
                ))}
        </div>
    </div>
  );
}

export default Kiosk;
