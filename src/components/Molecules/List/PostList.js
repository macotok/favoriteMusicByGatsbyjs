import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Divider } from '@material-ui/core';
import TitleH2 from '../../Atoms/Title/TitleH2';
import ButtonPrimary from '../../Atoms/Button/ButtonPrimary';
import ArticleText from '../../Atoms/Text/ArticleText';

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`;

const PostList = ({ post, isLastChild }) => (
  <>
    <TitleH2>
      {post.node.title}
    </TitleH2>
    <ArticleText text={post.node.excerpt} />
    <ButtonPrimary>
      <LinkText to={`favorite/${post.node.wordpress_id}`}>
        Read More...
      </LinkText>
    </ButtonPrimary>
    {isLastChild ? null : (<Divider variant="middle" component="div" style={{ marginBottom: '2rem' }} />)}
  </>
);

export default PostList;
