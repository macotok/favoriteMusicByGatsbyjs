import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

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
  text: PropTypes.string.isRequired
};

export default ArticleText;
