import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Divider, Typography } from '@material-ui/core';
import TitleH2 from '../../Atoms/Title/TitleH2';
import ButtonPrimary from '../../Atoms/Button/ButtonPrimary';

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`;

const PostList = ({ post, isLastChild }) => (
  <>
    <TitleH2>
      {post.node.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
    <ButtonPrimary>
      <LinkText to={`post/${post.node.wordpress_id}`}>
        Read More...
      </LinkText>
    </ButtonPrimary>
    {isLastChild ? null : (<Divider variant="middle" component="div" />)}
  </>
);

export default PostList;
