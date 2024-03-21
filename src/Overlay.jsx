import React from 'react';
import './Overlay.css';

const Overlay = ({ show, onClick }) => {
  return (
    <div className={`overlay ${show ? 'show' : ''}`} onClick={onClick}>
      <div className='overview'>
        <h1>BatStateU - Alangilan Campus Site</h1>
        <h3>(tap screen to continue...)</h3>
      </div>
    </div>
  );
}

export default Overlay;
