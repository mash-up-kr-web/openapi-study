/* External dependencies */
import React, { useRef, useState, useMemo } from 'react';
import 'App.css';
import KakaoService from 'services/KakaoMapService';
import RakutenService from 'services/RakutenService';

function App() {
  const addressInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isSnow, setIsSnow] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const onSearch = async () => {
    const { lat, lon } = await KakaoService.getLatlngFromAddress(
      addressInput.current.value,
    );
    const { snow } = await RakutenService.getWeather(lat, lon);
    setIsSnow(snow > 0 ? true : false);
    setIsSearch(true);
  };

  return (
    <div
      className={isSnow ? 'snowing' : 'default'}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#fff' }}>
        크리스마스에 눈이 올까요?
      </h1>
      <div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <span>주소: </span>
          <input type="text" name="address" ref={addressInput} />
          <button onClick={onSearch}>검색</button>
          {!isSnow && isSearch && (
            <h1 style={{ textAlign: 'center', color: '#fff' }}>안와욤!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
