import './MapContainer.css'
import FloorContainer from './FloorContainer'


function MapContainer({showFloorContainer}) {
    
    return (
        <div className='mapContainer'>
            { showFloorContainer && <FloorContainer /> }
        </div>
    )
}


export default MapContainer