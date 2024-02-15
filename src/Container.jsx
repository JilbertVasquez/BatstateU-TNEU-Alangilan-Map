import './Container.css'
import BuildingContainer from './BuildingContainer';
import MapContainer from './MapContainer';

function Container() {
    
    return(
        <div className='fullContainer'>
            <BuildingContainer />
            <MapContainer />

        </div>
    );
}

export default Container