import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import Pagination from '../components/Atoms/Pagination/Pagination';

const PaginationWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const favoritePostList = ({ pageContext }) => (
  <Layout>
    {
      pageContext.posts.map(post => (
        <div key={post.node.wordpress_id}>
          <TitleH2>
            {post.node.title}
          </TitleH2>
          <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: post.node.content }} />
          <Divider variant="middle" component="div" />
        </div>
      ))
    }
    <PaginationWrap>
      <Pagination pageContext={pageContext} pathName="favorite" />
    </PaginationWrap>
  </Layout>
);

export default favoritePostList;
