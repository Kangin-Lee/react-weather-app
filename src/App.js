import { useEffect,useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Paris", "New York", "London", "Busan"];
  const [city, setCity] = useState("");
  const [visible, setVisible] = useState(false);

  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    setVisible(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setVisible(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    setVisible(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setVisible(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      {visible ? (
        <div className="container">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="lightblue"
            ariaLabel="three-dots-loading"
            visible={visible}
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
            selectedCity={city}
          />
        </div>
      )}
    </>
  );
}

export default App;
