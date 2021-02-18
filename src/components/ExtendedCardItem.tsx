import React, { useEffect } from 'react';
import styled from 'styled-components';

import PostItem from 'components/PostItem';
import CommentItem from 'components/CommentItem';
import CreateComment from 'components/CreateComment';
import { useCommentContext } from 'contexts/Comment';
import CardDetailProps from 'types/props/CardDetailProps';

const ExtendedCardItem = ({ post, active, setExtended }: CardDetailProps) => {
  const { state, actions } = useCommentContext();
  const { id } = post;

  useEffect(() => {
    actions.fetchComments(post.id);
  }, []);

  return (
    <ExtendedCardItemContainer active={active}>
      <PostItem post={post} />
      <CommentsContainer>
        {state.comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </CommentsContainer>
      <CreateComment postId={id} />
      <FooterBox>
        <LinkButton onClick={() => setExtended(false)}>go back</LinkButton>
      </FooterBox>
    </ExtendedCardItemContainer>
  );
};

const ExtendedCardItemContainer = styled.div<{ active: boolean }>`
  height: ${props => (props.active ? ' 440px' : ' 400px')};
  width: 600px;
  background-color: rgb(94, 94, 94);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition: width 0.5s, height 0.5s, -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, transform 0.5s;
`;

const CommentsContainer = styled.div`
  overflow: auto;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(94, 94, 94);
`;

const FooterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const LinkButton = styled.a`
  font-size: 10;
  cursor: pointer;
`;

export default ExtendedCardItem;
