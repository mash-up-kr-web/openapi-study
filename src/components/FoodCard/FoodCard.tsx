/* External dependencies */
import React from 'react';

/* Internal dependencies */
import { IMAGE_WIDTH } from 'App';
import * as Styled from './FoodCard.styled';

interface FoodCardProps {
  recipeName: string;
  recipeUrl: string;
}

const FoodCard = ({ recipeName, recipeUrl }: FoodCardProps) => {
  return (
    <Styled.FoodCardWrapper>
      <Styled.RecipeName>{recipeName}</Styled.RecipeName>
      <img src={recipeUrl} width={IMAGE_WIDTH} alt="" />
    </Styled.FoodCardWrapper>
  );
};

export default FoodCard;
