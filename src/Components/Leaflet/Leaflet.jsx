import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'; // Import Tooltip
import L from 'leaflet'; // Import leaflet
import 'leaflet/dist/leaflet.css'; // Import leaflet styles
import { useParams } from 'react-router-dom';

const MapComponent = () => {
  let position = [12.85864747594246, 74.83975521716955]; // Default position
  const { restaurantName } = useParams();

  if (restaurantName === 'McDonalds') {
    position = [12.85864747594246, 74.83975521716955];
  } else if (restaurantName === 'Papajohns') {
    position = [38.99357203829018, -122.24487923316534];
  } else if (restaurantName === 'KFC') {
    position = [12.974359769854841, 74.86455277259924];
  } else if (restaurantName === 'Texas') {
    position = [10.946975085610967, 106.82468873119947];
  } else if (restaurantName === 'Burger King') {
    position = [10.805543848737097, 106.73747900046214];
  } else if (restaurantName === 'Shaurma') {
    position = [40.374779426875676, 49.832023179306766];
  }

  console.log(restaurantName); // Debugging to see the restaurant name

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false} 
      style={{
        height: "50vh",
        width: "auto",
        minWidth: "93.5%",
        backgroundColor: "lightblue",
        marginLeft: "3%",
        marginRight: "500px",
        padding: "0 10%"
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <strong>{restaurantName}</strong> <br />
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
          {restaurantName} Location
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
