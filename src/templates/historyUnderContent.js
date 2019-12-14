import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout/Layout';
import TitleH2 from '../components/Atoms/TitleH2';
import ArticleText from '../components/Atoms/ArticleText';
import PortfolioItems from '../components/Organisms/PortfolioItems';


export default ({ pageContext }) => (
  <Layout>
    <TitleH2>
      {pageContext.title}
    </TitleH2>
    <Typography component="div" variant="body1" gutterBottom>
      <ArticleText text={pageContext.content} />
    </Typography>
    <PortfolioItems />
  </Layout>
)

