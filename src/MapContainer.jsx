import './MapContainer.css';
import React, { useState, useRef } from 'react';
import CICSBuilding from './CICSBuilding';
import CEAFABuilding from './CEAFABuilding';
import CITBuilding from './CITBuilding';
import RGRBuilding from './RGRBuilding';
import SCSBuilding from './SCSBuilding';
import GYMBuilding from './GYMBuilding';
import SteerHubBuilding from './SteerHubBuilding';
import SearchRoom from './SearchRoom';
import { defaultCEAFAVideoPH, defaultCICSVideoPH, defaultCITVideoPH, defaultGYMVideoPH, defaultRGRVideoPH, defaultSSCVideoPH, defaultSTEERHUBVideoPH } from './PathHandler';

import campusmap from "./assets/campusmap.jpg";

function MapContainer(  {showFloorContainer, showCEAFABuilding, showCICSBuilding, showCITBuilding, showRGRBuilding, showSCSBuilding, showGYMBuilding, showSteerHubBuilding,  isCampusMap, isCICSBuilding, isCEAFABuilding, isCITBuilding, isRGRBuilding, isSCSBuilding, isGYMBuilding, isSteerHubBuilding, handleVideoEnd, isvideoEnded,  showSearchFloorContainer, searchRoomInfo ,isCICSBuilding2, isCITBuilding2, isRGRBuilding2, isSSCBuilding2, isCEAFABuilding2, isGYMBuilding2, handleVideoEnd2, isvideoEnded2}) {
    let defaultCEAFAVideo = defaultCEAFAVideoPH;
    let defaultCICSVideo = defaultCICSVideoPH;
    let defaultCITVideo = defaultCITVideoPH;
    let defaultGYMVideo = defaultGYMVideoPH;
    let defaultRGRVideo = defaultRGRVideoPH;
    let defaultSSCVideo = defaultSSCVideoPH;
    let defaultSTEERHUBCVideo = defaultSTEERHUBVideoPH;

    return (
        <div className='mapContainer'>
            {isCampusMap && <img id='campusmap' src={campusmap}></img>}
            {isCEAFABuilding && <video src={defaultCEAFAVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isCICSBuilding && <video src={defaultCICSVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isCITBuilding && <video src={defaultCITVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isRGRBuilding && <video src={defaultRGRVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isSCSBuilding && <video src={defaultSSCVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isGYMBuilding && <video src={defaultGYMVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}
            {isSteerHubBuilding && <video src={defaultSTEERHUBCVideo} autoPlay className='MapVideoWay1' onEnded={handleVideoEnd}></video>}

            {isCICSBuilding2 && <video src={defaultCICSVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isCITBuilding2 && <video src={defaultCITVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isRGRBuilding2 && <video src={defaultRGRVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isSSCBuilding2 && <video src={defaultSSCVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isGYMBuilding2 && <video src={defaultGYMVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isCEAFABuilding2 && <video src={defaultCEAFAVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}
            {isGYMBuilding2 && <video src={defaultGYMVideo} autoPlay className='MapVideoWay' onEnded={handleVideoEnd2}></video>}


            <div className='buildingSection'>
                {isvideoEnded && showCEAFABuilding && showFloorContainer && <CEAFABuilding />}
                {isvideoEnded && showCICSBuilding && showFloorContainer && <CICSBuilding />}
                {isvideoEnded && showCITBuilding && showFloorContainer && <CITBuilding />}
                {isvideoEnded && showRGRBuilding && showFloorContainer && <RGRBuilding />}
                {isvideoEnded && showSCSBuilding && showFloorContainer && <SCSBuilding />}
                {isvideoEnded && showGYMBuilding && showFloorContainer && <GYMBuilding />}
                {isvideoEnded && showSteerHubBuilding && showFloorContainer && <SteerHubBuilding />}

                {isvideoEnded2 && showSearchFloorContainer && <SearchRoom searchRoomInfo ={searchRoomInfo} />}

            </div>
        </div>
    )
}

export default MapContainer