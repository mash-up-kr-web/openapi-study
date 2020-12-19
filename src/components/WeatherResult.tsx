import React from 'react';

type WeatherIcon = { icon: string; description: string };

type Weather = {
  timezone: string;
  weather: WeatherIcon;
};

const TimeZone = ({ timezone }: Pick<Weather, 'timezone'>) => {
  return <div>{timezone}</div>;
};

const Icon = ({ weather: { icon, description } }: Pick<Weather, 'weather'>) => {
  return (
    <img
      src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
      alt={description}
    />
  );
};

const WeatherResult = ({ weather }: { weather: Record<string, any> }) => {
  return (
    <div>
      <TimeZone timezone={weather.timezone} />
      <Icon weather={weather.weather} />
    </div>
  );
};

export default WeatherResult;
