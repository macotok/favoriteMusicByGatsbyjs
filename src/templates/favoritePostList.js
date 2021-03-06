import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layouts/Default';
import Pagination from '../components/Atoms/Pagination/Pagination';
import PostList from '../components/Molecules/List/PostList';
import { propArray, propShape, propString } from '../helpers/propTypes';

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const favoritePostList = ({ pageContext, location: { pathname } }) => (
  <Layout pathname={pathname}>
    {
      pageContext.posts.map((post, index) => (
        <PostList post={post} isLastChild={pageContext.posts.length === (index + 1)} key={index} />
      ))
    }
    <PaginationWrap>
      <Pagination pageContext={pageContext} pathName="favorite" />
    </PaginationWrap>
  </Layout>
);

favoritePostList.propTypes = {
  pageContext: propShape({
    posts: propArray(),
  }),
  location: propShape({
    pathname: propString(),
  })
};

export default favoritePostList;
