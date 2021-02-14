/* External dependencies */
import React, { useCallback } from 'react';

/* Internal dependencies */
import * as Styled from './Ingredients.styled';

interface IngredientsProps {
  ingredients: string[];
  onAnswer: (selectedAnswer: string) => void;
}

const Ingredients = ({ ingredients, onAnswer }: IngredientsProps) => {
  const handleAnswer = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { ingredient } = event.currentTarget.dataset;
      onAnswer(ingredient as string);
    },
    [onAnswer],
  );

  return (
    <Styled.IngredientList>
      {ingredients.map((ingredient, index) => (
        <Styled.IngredientItem
          key={`${ingredient}-${index}`}
          data-ingredient={ingredient}
          onClick={handleAnswer}
        >
          <Styled.ItemNumber>{index + 1}</Styled.ItemNumber>
          {ingredient}
        </Styled.IngredientItem>
      ))}
    </Styled.IngredientList>
  );
};

export default Ingredients;
