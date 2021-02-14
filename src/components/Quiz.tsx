import React from 'react';
import FoodCard, { Food } from './FoodCard';
import Ingredients from './Ingredients';

const Quiz = ({
  RECIPE_NM_KO,
  IMG_URL,
}: Pick<Food, 'RECIPE_NM_KO' | 'IMG_URL'>) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <FoodCard RECIPE_NM_KO={RECIPE_NM_KO} IMG_URL={IMG_URL} />
      <Ingredients ingredients={['a', 'b', 'c']}></Ingredients>
    </div>
  );
};

export default Quiz;
