import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layouts/Default';
import TitleH2 from '../components/Atoms/Title/TitleH2';
import ArticleText from '../components/Atoms/Text/ArticleText';

const TitleWrap = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
  line-height: 2;
`;

const post = ({ pageContext }) => (
  <Layout>
    <TitleWrap>
      <TitleH2>
        {pageContext.title}
      </TitleH2>
      recommend: {pageContext.acf.recommend}
    </TitleWrap>
    <ArticleText text={pageContext.content} />
  </Layout>
);

export default post;
