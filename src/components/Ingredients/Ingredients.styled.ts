/* External dependencies */
import styled from 'styled-components';

export const IngredientItem = styled.div`
  padding: 12px 30px;
  font-size: 24px;
  font-weight: bolder;
  background-color: #fcfcfc;
  border: 2px solid #d2d2d2;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const IngredientList = styled.div`
  displat: flex;
  flex-direction: column;

  ${IngredientItem} + ${IngredientItem} {
    margin-top: 20px;
  }
`;

export const ItemNumber = styled.span`
  margin-right: 10px;
`;
