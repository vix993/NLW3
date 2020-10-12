import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';
import L from 'leaflet';

interface OrphanagesMapProps {

}

const OrphanagesMap: React.FC<OrphanagesMapProps> = ({}) => {
        return (
            <div id="page-map">
                <aside>
                    <header>
                        <img src={mapMarkerImg} alt="Happy"/>

                        <h2>Choose an orphanage</h2>
                        <p>Many children are awaiting your visit</p>
                    </header>

                    <footer>
                        <strong>London</strong>
                        <span>UK</span>
                    </footer>
                </aside>

                <Map
                    center={[51.5287352,-0.3817888]}
                    zoom={15}
                    style={{ width: '100%', height: '100%' }}
                    // layers={[L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png')]}
                    layers={[L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)]}
                >
                </Map>
                <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="FFF"/>
                </Link>
            </div>
        );
}

export default OrphanagesMap;