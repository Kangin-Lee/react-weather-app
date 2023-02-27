import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({
  cities,
  setCity,
  getCurrentLocation,
  selectedCity,
}) => {
  return (
    <div className="weather-btn">
      <Button
        variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
        className="btn"
        onClick={getCurrentLocation}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
          className="btn"
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
