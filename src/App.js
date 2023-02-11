import { useEffect,useState } from 'react';
import './App.css';

function App() {

  //위치 가져오기
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation= async (lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=07c8f80150954d942a79882827366bc7`
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
    </div>
  );
}

export default App;