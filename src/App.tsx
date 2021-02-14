/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Quiz from 'components/Quiz';
import Result from 'components/Result';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Quiz
        RECIPE_NM_KO="테스트"
        IMG_URL="http://file.okdab.com/UserFiles/searching/recipe/000200.jpg"
      ></Quiz>
      <Result answerCount={1} />
    </div>
  );
}

export default App;
