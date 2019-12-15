import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import TitleH2 from '../../Atoms/Title/TitleH2';

const PostList = ({ post, isLastChild }) => (
  <>
    <TitleH2>
      {post.node.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: post.node.content }} />
    {isLastChild ? null : (<Divider variant="middle" component="div" />)}
  </>
);

export default PostList;
