import React from "react";
import styles from "../style/WeatherCard.module.css";

function WeatherCard({ data }) {
  const { name, main, weather } = data;
  const weatherIcon = weather[0].icon;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weather[0].description}
        className={styles.weatherIcon}
      />
      <p className={styles.temp}>{Math.round(main.temp)}°C</p>
      <p className={styles.detail}>
        <strong>Feels like:</strong> {Math.round(main.feels_like)}°C
      </p>
      <p className={styles.detail}>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
      <p className={styles.detail}>
        <strong>Weather:</strong> {weather[0].description}
      </p>
    </div>
  );
}

export default WeatherCard;