import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Header from 'components/Header';
import CardItem from 'components/CardItem';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

import { usePostContext } from 'contexts/Post';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Main = () => {
  const [nextSlide, setNextSlide] = useState(0);
  const { state, actions } = usePostContext();
  const reversePosts = [...state.posts].reverse();

  useEffect(() => {
    actions.fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <MainLayout>
        {state?.posts && (
          <Carousel
            centerMode
            responsive={responsive}
            beforeChange={setNextSlide}
          >
            {reversePosts.map((post, i) => {
              return (
                <CardItem key={post.id} active={i === nextSlide} post={post} />
              );
            })}
          </Carousel>
        )}
      </MainLayout>
    </>
  );
};

export default Main;

const MainLayout = styled.div`
  width: 100%;
`;
