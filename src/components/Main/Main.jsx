import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import {
  WEATHER_ROOT_URL,
  WEATHER_API_KEY,
} from "../../constants/currentWeatherApi";
import ForecastCard from "../ForecastCard/ForecastCard";
import "./Main.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Main() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [lang, setLang] = useState("ru");
  const { t, i18next } = useTranslation();

  const handleLang = () => setLang(lang === "ru" ? "en" : "ru");

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherAxios = fetch(
      `${WEATHER_ROOT_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=${lang}`
    );
    const forecastWeatherAxios = fetch(
      `${WEATHER_ROOT_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=${lang}`
    );

    Promise.all([currentWeatherAxios, forecastWeatherAxios])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <Header onSearchChange={handleOnSearchChange} />
      {currentWeather && <Card data={currentWeather} />}
      {forecast && <ForecastCard data={forecast} />}
    </div>
  );
}

export default Main;
