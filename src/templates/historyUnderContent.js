import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import TitleH3 from '../components/Atoms/Title/TitleH3';
import ArticleText from '../components/Atoms/Text/ArticleText';
import BlockFloatingList from '../components/Molecules/List/BlockFloatingList';

export default ({ pageContext, location: { pathname } }) => (
  <Layout pathname={pathname}>
    <TitleH2>
      {pageContext.title}
    </TitleH2>
    <Typography component="div" variant="body1" gutterBottom>
      <ArticleText text={pageContext.content} />
    </Typography>
    <Divider variant="middle" component="div" style={{ margin: '1rem 0 2rem' }} />
    <TitleH3 icon={<FaceIcon style={{ position: 'relative', top: 5, marginRight: 5 }} />}>
      影響を受けたミュージシャン
    </TitleH3>
    <BlockFloatingList />
  </Layout>
)

