/* External dependencies */
import React, { useEffect } from 'react';

import TravelService from './services/TravelService';

function App() {
  useEffect(() => {
    (async () => {
      const res = await TravelService.getSomethingTravel();
      console.log(res);
    })();
  }, []);

  return <div>Hello World!</div>;
}

export default App;
