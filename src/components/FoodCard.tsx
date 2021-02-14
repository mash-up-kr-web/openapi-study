import React from 'react';

export type Food = {
  ROW_NUM: number;
  RECIPE_ID: number;
  RECIPE_NM_KO: string;
  SUMRY: string;
  NATION_CODE: string;
  NATION_NM: string;
  TY_CODE: string;
  TY_NM: string;
  COOKING_TIME: string;
  CALORIE: string;
  QNT: string;
  LEVEL_NM: string;
  IRDNT_CODE: string;
  PC_NM: string;
  IMG_URL: string;
  DET_URL: string;
};

const FoodCard = ({
  RECIPE_NM_KO,
  IMG_URL,
}: Pick<Food, 'RECIPE_NM_KO' | 'IMG_URL'>) => {
  return (
    <div
      style={{
        flex: 3,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80%',
          width: '80%',
        }}
      >
        {RECIPE_NM_KO}
        <img
          src={IMG_URL}
          alt={RECIPE_NM_KO}
          style={{ height: '100%', width: '100%' }}
        ></img>
      </div>
    </div>
  );
};

export default FoodCard;
