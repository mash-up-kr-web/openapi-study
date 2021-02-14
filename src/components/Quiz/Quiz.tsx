/* External dependencies */
import React from 'react';

/* Internal dependencies */
import FoodCard from 'components/FoodCard';
import Ingredients from 'components/Ingredients';
import * as Styled from './Quiz.styled';
import mashupLogo from 'images/mashup-logo.png';

interface QuizProps {
  recipeName: string;
  recipeUrl: string;
  ingredients: string[];
  onAnswer: (selectedAnswer: string) => void;
}

function Quiz({ recipeName, recipeUrl, ingredients, onAnswer }: QuizProps) {
  return (
    <Styled.QuizWrapper>
      <Styled.InnerWrapper>
        <FoodCard recipeName={recipeName} recipeUrl={recipeUrl} />
        <Ingredients ingredients={ingredients} onAnswer={onAnswer} />
      </Styled.InnerWrapper>
      <Styled.Background>
        <img src={mashupLogo} width={700} alt="" />
      </Styled.Background>
    </Styled.QuizWrapper>
  );
}

export default Quiz;
