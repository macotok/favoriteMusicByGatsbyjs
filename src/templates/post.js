import React from 'react';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import ArticleText from '../components/Atoms/Text/ArticleText';

const post = ({ pageContext }) => (
  <Layout>
    <TitleH2>
      {pageContext.title}
    </TitleH2>
    <ArticleText text={pageContext.content} />
  </Layout>
);

export default post;
