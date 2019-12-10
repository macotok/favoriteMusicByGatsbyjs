import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import TitleH2 from '../../Atoms/TitleH2';
import ButtonPrimary from '../../Atoms/ButtonPrimary';
import Divider from '@material-ui/core/Divider';

const BlockListWrap = styled.div`
  margin-bottom: 2rem;
`;

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`


const BlockList = ({ list, isLastChild }) => (
  <BlockListWrap>
    <TitleH2>
      {list.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom>
      {list.content}
    </Typography>
    <ButtonPrimary>
      <LinkText to={list.link}>
        {list.linkText}
      </LinkText>
    </ButtonPrimary>
    {isLastChild ? null : (<Divider variant="middle" component="div" />)}
  </BlockListWrap>
);

BlockList.propTypes = {
  list: PropTypes.shape({}).isRequired,
  isLastChild: PropTypes.bool,
};

BlockList.defaultProps = {
  isLastChild: false,
}

export default BlockList;
