import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {Divider, Typography } from '@material-ui/core';
import TitleH2 from '../../Atoms/Title/TitleH2';
import ButtonPrimary from '../../Atoms/Button/ButtonPrimary';
import { propBool, propShape, propString } from '../../../helpers/propTypes';

const BlockListWrap = styled.div`
  margin-bottom: 2rem;
`;

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BlockList = ({ list, isLastChild }) => (
  <BlockListWrap>
    <TitleH2>
      {list.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{__html: list.content}} />
    <ButtonPrimary>
      <LinkText to={list.link}>
        {list.linkText}
      </LinkText>
    </ButtonPrimary>
    {isLastChild ? null : (<Divider variant="middle" component="div" />)}
  </BlockListWrap>
);

BlockList.propTypes = {
  list: propShape({
    title: propString(),
    link: propString(),
    linkText: propString(),
  }).isRequired,
  isLastChild: propBool(),
};

BlockList.defaultProps = {
  isLastChild: false,
};

export default BlockList;
