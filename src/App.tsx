/* External dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

/* Internal dependencies */
import Quiz from 'components/Quiz';
import Result from 'components/Result';
import LoadingResult from 'components/LoadingResult';
import recipesJSON from 'constants/recipes.json';

const QUIZ_COUNT = 10;

//난이도 하
const QUIZ_SELECT_COUNT = 4;
export const IMAGE_WIDTH = 600;

// 난이도 중
// const QUIZ_SELECT_COUNT = 5;
// export const IMAGE_WIDTH = 400;

// 난이도 상
// const QUIZ_SELECT_COUNT = 6;
// export const IMAGE_WIDTH = 200;

// 난이도 특상
// const QUIZ_SELECT_COUNT = 10;
// export const IMAGE_WIDTH = 80;

const recipes = recipesJSON.Grid_20150827000000000226_1.row;

function getRandomNumbers(
  startIndex: number,
  endIndex: number,
  amount: number,
) {
  const tempArr: number[] = [];
  if (startIndex > endIndex) {
    let temp = startIndex;
    startIndex = endIndex;
    endIndex = temp;
  }
  if (endIndex - startIndex + 1 < amount) {
    amount = endIndex - startIndex + 1;
  }

  while (tempArr.length < amount) {
    const randomIndex =
      Math.floor(Math.random() * endIndex - startIndex + 1) + startIndex;

    if (!tempArr.includes(randomIndex)) {
      tempArr.push(randomIndex);
    }
  }

  return tempArr;
}

function App() {
  const [answerCount, setAnswerCount] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [corrected, setCorrected] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [recipeUrl, setRecipeUrl] = useState('');
  const [answer, setAnswer] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleQuiz = useCallback(async () => {
    try {
      const quizIndex = Math.floor(Math.random() * recipes.length);
      const { RECIPE_ID, RECIPE_NM_KO, IMG_URL } = recipes[quizIndex];

      const result = await axios.get(`/api/getRecipe/${RECIPE_ID}`);
      const resultRow = _.get(result, 'data.Grid_20150827000000000227_1.row');

      if (resultRow.length < QUIZ_SELECT_COUNT) {
        handleQuiz();
        return;
      }

      let answerQuizIndex = -1;

      while (answerQuizIndex === -1) {
        const tempIndex = Math.floor(Math.random() * recipes.length);

        if (tempIndex !== quizIndex) {
          answerQuizIndex = tempIndex;
        }
      }

      const { RECIPE_ID: answerRecipeId } = recipes[answerQuizIndex];

      const answerResult = await axios.get(`/api/getRecipe/${answerRecipeId}`);
      const answerResultRow = _.get(
        answerResult,
        'data.Grid_20150827000000000227_1.row',
      );

      if (!_.isArray(resultRow) || !_.isArray(answerResultRow)) {
        throw new Error();
      }

      const allIngredients: string[] = resultRow.map(row => row.IRDNT_NM);
      const allAnswerIngredients: string[] = answerResultRow.map(
        row => row.IRDNT_NM,
      );

      let answerIngredient = '';

      while (_.isEmpty(answerIngredient)) {
        const answerIngredientIndex = Math.floor(
          Math.random() * allAnswerIngredients.length,
        );
        const tempAnswerIngredient =
          allAnswerIngredients[answerIngredientIndex];

        if (!allIngredients.includes(tempAnswerIngredient)) {
          answerIngredient = tempAnswerIngredient;
        }
      }

      const quizIngredients: string[] = [];
      const quizIngredientIndexes = getRandomNumbers(
        0,
        allIngredients.length - 1,
        QUIZ_SELECT_COUNT - 1,
      );

      for (let i = 0; i < quizIngredientIndexes.length; i++) {
        quizIngredients.push(allIngredients[quizIngredientIndexes[i]]);
      }

      const answerIndex = Math.floor(Math.random() * QUIZ_SELECT_COUNT);
      const ingredientsList = [
        ...quizIngredients.slice(0, answerIndex),
        answerIngredient,
        ...quizIngredients.slice(answerIndex),
      ];

      setRecipeName(RECIPE_NM_KO);
      setRecipeUrl(IMG_URL);
      setAnswer(answerIngredient);
      setIngredients(ingredientsList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAnswer = useCallback(
    (selectedAnswer: string) => {
      setLoading(true);

      if (answer === selectedAnswer) {
        setAnswerCount(prev => prev + 1);
        setCorrected(true);
      } else {
        setCorrected(false);
      }

      setTimeout(() => {
        if (currentQuizIndex >= QUIZ_COUNT) {
          setFinished(true);
        }

        setLoading(false);
        setCurrentQuizIndex(prev => prev + 1);
        handleQuiz();
      }, 2000);
    },
    [answer, currentQuizIndex, handleQuiz],
  );

  useEffect(() => {
    handleQuiz();
  }, [handleQuiz]);

  return (
    <>
      <Quiz
        recipeName={recipeName}
        recipeUrl={recipeUrl}
        ingredients={ingredients}
        onAnswer={handleAnswer}
      />
      {isFinished && <Result answerCount={answerCount} />}
      {isLoading && <LoadingResult corrected={corrected} answer={answer} />}
    </>
  );
}

export default App;
