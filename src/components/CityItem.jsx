import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

// formatDate function outside of the CityItem component,
// for reason: to not always be created again
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  console.log(position);
  return (
    <li>
      {/* ${id}?lat=${position.lat}  url param = id - query param ?paramName=${} */}
      {/* add another query param with &paramaName=${} */}
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        {" "}
        {/* link to city id - pass it to city page */}
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
