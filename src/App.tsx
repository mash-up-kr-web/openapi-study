/* External dependencies */
import { WeatherResult } from 'components';
import React, { useState, useCallback } from 'react';

/* Internal dependencies */
import KakaoService from 'services/KakaoMapService';
import RakutenService from 'services/RakutenService';

const mock =
  '{"rh":26,"pod":"d","lon":127.05,"pres":1031.3,"timezone":"Asia/Seoul","ob_time":"2020-12-19 05:03","country_code":"KR","clouds":0,"ts":1608354212,"solar_rad":411,"state_code":"11","city_name":"Seoul","wind_spd":6.7,"wind_cdir_full":"northwest","wind_cdir":"NW","slp":1032.9,"vis":5,"h_angle":36,"sunset":"08:16","dni":763.07,"dewpt":-18.1,"snow":0,"uv":4.22244,"precip":0,"wind_dir":320,"sunrise":"22:42","ghi":411.01,"dhi":90.06,"aqi":34,"lat":37.51,"weather":{"icon":"c01d","code":800,"description":"Clear sky"},"datetime":"2020-12-19:05","temp":-1,"station":"RKSY","elev_angle":25.43,"app_temp":-7}';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<Record<string, any>>(JSON.parse(mock));

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [],
  );

  const handleClickButton = useCallback(async () => {
    try {
      const { lat, lon } = await KakaoService.getLatlngFromAddress(query);
      const weather = await RakutenService.getWeather(lat, lon);
      setWeather(weather);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={query} />
        <button onClick={handleClickButton}>날씨조회</button>
      </div>
      <WeatherResult weather={weather} />
    </div>
  );
}

export default App;
