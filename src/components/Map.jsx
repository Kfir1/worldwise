import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  // starting position for map array of and [lat, lng]
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  // get the lattitude and longitude params from URL with useSearchParams
  // it returns array with current state
  const [searchParams, setSearchParams] = useSearchParams();
  // then store the lat and lng to variable because it is not directly accessible on searchParams
  // the wanted query string from URL has to match the name in get("lat") - lat for lattitude
  const lat = searchParams.get("lat");
  // same for longitude param
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
