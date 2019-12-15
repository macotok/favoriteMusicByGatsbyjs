import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layouts/Default';
import Pagination from '../components/Atoms/Pagination/Pagination';
import PostList from '../components/Molecules/List/PostList';

const PaginationWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const favoritePostList = ({ pageContext }) => (
  <Layout>
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

export default favoritePostList;
