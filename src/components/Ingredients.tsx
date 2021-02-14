import React from 'react';
import IngredientCard from './IngredientCard';

const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {ingredients.map(ingredient => (
        <IngredientCard IRDNT_NM={ingredient}></IngredientCard>
      ))}
    </div>
  );
};

export default Ingredients;
