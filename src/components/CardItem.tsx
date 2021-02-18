import React, { useState } from 'react';

import FoldedCardItem from 'components/FoldedCardItem';
import ExtendedCardItem from 'components/ExtendedCardItem';
import CardItemProps from 'types/props/CardItemProps';

const CardItem = ({ post, active }: CardItemProps) => {
  const [extended, setExtended] = useState<boolean>(false);

  return extended ? (
    <ExtendedCardItem post={post} active={active} setExtended={setExtended} />
  ) : (
    <FoldedCardItem post={post} active={active} setExtended={setExtended} />
  );
};

export default CardItem;
