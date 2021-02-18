import React, { createContext, useContext, useState } from 'react';

import PostInterface from 'types/Post';
import {
  createPost as creatPostInDatabase,
  fetchPosts as fetchPostsInDatabase,
  getNextPostId,
} from 'firebase/database/Post';

const PostContext = createContext<any>(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const createPost = async (
    writer: string,
    writerImgUrl: string,
    content: string,
  ) => {
    const nextPostId = await getNextPostId();
    const post = {
      id: nextPostId,
      writer,
      writerImgUrl,
      content,
      date: new Date().getTime(),
    };

    creatPostInDatabase(post);
    setPosts(posts.concat(post));
  };

  const fetchPosts = async () => {
    const res = await fetchPostsInDatabase();
    setPosts(res);
  };

  const value = {
    state: { posts },
    actions: { createPost, fetchPosts },
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePostContext() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('Cannot find PostContext');
  }
  return context;
}
