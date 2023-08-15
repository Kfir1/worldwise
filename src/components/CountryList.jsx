import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities(); // receiving data directly from the context

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }
  // reduce((accumulator, current value)
  // iterate on the array of cities and check if it is included already in the array of cities/countries that is being created
  // if country is not included, then add to object in arr the { country: city.country, emoji: city.emoji } in addition to ...arr
  // this is done to prevent duplication of countries, if several cities from the same country are relevant.
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((arrItem) => arrItem.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}

export default CountryList;
