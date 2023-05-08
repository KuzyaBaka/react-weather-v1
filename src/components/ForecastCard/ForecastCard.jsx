import React from "react";
import { FcCard, ForecastContainer } from "./styledForecast";

function ForecastCard({ data }) {
  const WEEK_DAY = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const daysOnAWeek = new Date().getDay();
  const day = WEEK_DAY.slice(daysOnAWeek, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, daysOnAWeek)
  );

  return (
    <ForecastContainer>
      {data.list
        .splice(0, 7)
        .map((i, idx) => (
          <FcCard key={idx}>
            <h3>{day[idx]}</h3>
            <p>{i.dt_txt}</p>
            <img
              src={`./assets/${i.weather[0].icon}.png`}
              alt={i.weather[0].icon}
              width={45}
            />
            <p>{i.main.temp}°</p>
            <p>{i.main.feels_like}°</p>
            <p>{i.weather[0].description}</p>
          </FcCard>
        ))}
    </ForecastContainer>
  );
}

export default ForecastCard;
