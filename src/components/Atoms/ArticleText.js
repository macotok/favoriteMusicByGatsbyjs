import React from 'react';
import styled from 'styled-components';

const Article = styled.div`
  p {
    padding: 1rem 0;
  }
`;

const ArticleText = ({ text }) => (
  <Article dangerouslySetInnerHTML={{ __html: text }} />
);

export default ArticleText;
