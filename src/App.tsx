/* External dependencies */
import React, { useEffect } from 'react';

import TravelService from './services/TravelService';

function App() {
  useEffect(() => {
    // example
    // (async () => {
    //   const res = await TravelService.getTravelInfo({
    //     contentTypeId: 12, //관광지
    //     cat1: 'A01', //자연
    //     cat2: 'A0101', //자연관광지
    //     areaCode: 1, //서울
    //   });
    //   console.log(res);
    // })();
  }, []);

  return <div>Mash-up open api!</div>;
}

export default App;
