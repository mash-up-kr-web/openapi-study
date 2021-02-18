import React, { createContext, useContext, useState } from 'react';

import CommentInterface from 'types/Comment';
import {
  createComment as createCommentInDatabase,
  fetchComments as fetchCommentsInDatabase,
  getNextCommentId,
} from 'firebase/database/Comment';

const CommentContext = createContext<any>(null);

export function CommentProvider({ children }) {
  const [comments, setComments] = useState<CommentInterface[]>([]);

  const createComment = async (
    writer: string,
    writerImgUrl: string,
    content: string,
    postId: number,
  ) => {
    const nextCommentId = await getNextCommentId();
    const comment = {
      id: nextCommentId,
      writer,
      writerImgUrl,
      content,
      date: new Date().getTime(),
      postId,
    };

    createCommentInDatabase(comment);
    setComments(comments.concat(comment));
  };

  const fetchComments = async postId => {
    const res = await fetchCommentsInDatabase(postId);
    setComments(res);
  };

  const value = {
    state: { comments },
    actions: { createComment, fetchComments },
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
}

export function useCommentContext() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('Cannot find CommentContext');
  }
  return context;
}
