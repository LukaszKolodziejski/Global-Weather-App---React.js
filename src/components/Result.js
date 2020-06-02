import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h3>
          Search results for <em>{city}</em>
        </h3>
        <h4>Data for day and time: {date}</h4>
        <h4>Current temperature: {temp} &#176;C</h4>
        <h4>Sunrise today at {sunriseTime}</h4>
        <h4>Sunset today by {sunsetTime}</h4>
        <h4>Current wind force {wind} m/s</h4>
        <h4>Current pressure {pressure} hPa</h4>
      </>
    );
  }

  return (
    <div className="result">
      {err ? `We don't have in base ${city}` : content}
    </div>
  );
};

export default Result;
