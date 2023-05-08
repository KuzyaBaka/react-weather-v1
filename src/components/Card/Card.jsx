import React from "react";
import { Container, Current, ThisDayWeather } from "./styledCard";
import {
  WiThermometer,
  WiHumidity,
  WiCloudDown,
  WiStrongWind,
} from "react-icons/wi";
import "./Card.css";

function Card({ data }) {
  const imgPath = `./assets/${data.weather[0].icon}.png`;
  // Перевод в миллиметры ртутного столба
  const press = `${data.main.pressure}`;
  const mmHg = press / 1.33322;
  // Определение давления
  let normal;
  if (mmHg < 748) {
    normal = `пониженное`;
  }
  if (mmHg > 760) {
    normal = `повышенное`;
  } else {
    normal = `нормальное`;
  }

  // Направление ветра

  let deg = data.wind.deg;
  if (0 < deg < 90) {
    deg = "северо-восточный";
  }
  if (deg === 90) {
    deg = "восточный";
  }
  if (90 < deg < 180) {
    deg = "юго-восточный";
  }
  if (deg === 180) {
    deg = "южный";
  }
  if (180 < deg < 270) {
    deg = "юго-западный";
  }
  if (deg === 270) {
    deg = "западный";
  }
  if (270 < deg < 360) {
    deg = "северо-западный";
  }
  if (deg === 360) {
    deg = "северный";
  }

  // Осадки
  let rain = data.rain;
  let snow = data.snow;

  if (rain === undefined) {
    rain = "Без осадков";
  } else {
    rain = "Дождь";
  }

  if (snow === undefined) {
    snow = "Без осадков";
  } else {
    snow = "Снег";
  }

  return (
    <Container>
      <Current>
        <div className="top-section">
          <div>
            <h2 className="temp">{Math.trunc(data.main.temp)}°</h2>
            <p className="day">Сегодня</p>
          </div>
          <div className="img-cont">
            <img src={imgPath} alt={data.weather[0].icon} width={119} />
          </div>
        </div>
        <div className="bottom-section">
          <p className="desc">Время: </p>
          <p className="desc">Город: {data.name}</p>
        </div>
      </Current>
      <ThisDayWeather>
        <div className="information">
          <div className="this-day-info">
            <div className="icon-cont">
              <WiThermometer color="black" />
            </div>
            <p className="desc desc_day">Теспература</p>
          </div>
          <div className="this-day-info">
            <div className="icon-cont">
              <WiHumidity color="black" />
            </div>
            <p className="desc desc_day">Давление</p>
          </div>
          <div className="this-day-info">
            <div className="icon-cont">
              <WiCloudDown color="black" />
            </div>
            <p className="desc desc_day">Осадки</p>
          </div>
          <div className="this-day-info">
            <div className="icon-cont">
              <WiStrongWind color="black" />
            </div>
            <p className="desc desc_day">Ветер</p>
          </div>
        </div>
        <div className="values">
          <p className="text">
            {data.main.temp}° - ощущается как {data.main.feels_like}°
          </p>
          <p className="text">
            {Math.trunc(+mmHg)} мм ртутного столба - {normal}
          </p>
          <p className="text">{rain === "Дождь" ? rain : snow}</p>
          <p className="text">
            {data.wind.speed}м/с {deg}
          </p>
        </div>
      </ThisDayWeather>
    </Container>
  );
}

export default Card;
