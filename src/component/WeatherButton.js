import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  console.log(cities);
  return (
    <div className="weather-btn">
      <Button variant="warning" className="btn">
        Current Location
      </Button>

      {cities.map((item) => (
        <Button variant="warning" className="btn">
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
