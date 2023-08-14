import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
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
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 62, lng: 55 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
