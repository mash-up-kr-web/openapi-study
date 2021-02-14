import React from 'react';

const IngredientCard = ({ IRDNT_NM }: { IRDNT_NM: string }) => {
  return (
    <button style={{ padding: '4px 4px 8px 8px', width: '100%', height: 200 }}>
      {IRDNT_NM}
    </button>
  );
};

export default IngredientCard;
