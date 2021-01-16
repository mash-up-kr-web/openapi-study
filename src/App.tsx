/* External dependencies */
import ResultContainer from 'components/ResultContainer';
import React from 'react';

import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <div>
      <LanguageSelector />
      <ResultContainer />
    </div>
  );
}

export default App;
