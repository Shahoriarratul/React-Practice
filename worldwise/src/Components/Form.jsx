// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
/* eslint-disable */
import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useUrlPositon } from "../hooks/useUrlPositon";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0";
function Form() {
  const [lat, lng] = useUrlPositon();
  const navigator = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoading, setIsLoadingGeocoading] = useState(false);
  useEffect(
    function () {
      console.log(`lat = ${lat} lng = ${lng}`);
      async function fetchCityData() {
        try {
          setIsLoadingGeocoading(true);
          const res = fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
          const data = await res.json();
          console.log(data);
        } catch (err) {
        } finally {
          setIsLoadingGeocoading(false);
        }
      }
    },
    [lat, lng]
  );

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigator(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
