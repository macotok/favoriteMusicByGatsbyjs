import React from 'react';
import { Typography } from '@material-ui/core';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';

const post = ({ pageContext }) => (
  <Layout>
    <TitleH2>
      {pageContext.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);

export default post;
