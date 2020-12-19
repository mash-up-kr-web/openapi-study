/* External dependencies */
import React, { useRef, useState } from 'react';

import KakaoService from 'services/KakaoMapService';
import RakutenService from 'services/RakutenService';

function App() {

const addressInput = useRef() as React.MutableRefObject<HTMLInputElement>;
const [snowPower, setSnowPower] = useState(0)

  const onSearch = async () => {
    const { lat, lon } = await KakaoService.getLatlngFromAddress(addressInput.current.value)
    const {snow} = await RakutenService.getWeather(lat, lon)
    // const weather = await RakutenService.get16Weather()
    setSnowPower(snow)

  }

  return <>
  <h1>크리스마스에 눈이 올까요?</h1>
  <div >
  <div >
      주소: <input type='text' name='address'   ref={addressInput} />
      <button onClick={onSearch}>검색</button>
  </div>
  <div>{snowPower > 0 ? <img src='https://image.freepik.com/free-vector/christmas-snow-overlay_1048-11413.jpg' style={{backgroundColor:'#D8D8D8', width: 'auto', }}/> : '안와여'}
  
  </div>
  </div>
  </>
  
}



export default App;
