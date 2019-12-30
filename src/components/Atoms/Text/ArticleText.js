import React from 'react';
import styled from 'styled-components';
import { propString } from '../../../helpers/propTypes';

const Article = styled.div`
  p {
    padding: 1rem 0;;
  }
  img {
    max-width: 300px;
  }
`;

const ArticleText = ({ text }) => (
  <Article dangerouslySetInnerHTML={{ __html: text }} />
);

ArticleText.propTypes = {
  text: propString().isRequired
};

export default ArticleText;
