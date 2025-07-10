
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
      <MapContainer
        // center={[37.7749, -122.4194]} // Example: San Francisco coordinates
        // zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.7749, -122.4194]}>
          <Popup>Welcome to San Francisco!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}