import CardItemProps from './CardItemProps';

interface CardDetailProps extends CardItemProps {
  setExtended: (extended: boolean) => void;
}

export default CardDetailProps;
