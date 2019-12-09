import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TitleH2 from '../../Atoms/TitleH2';
import LinkButton from '../../Atoms/LinkButton';
import Divider from '@material-ui/core/Divider';

const BlockListWrap = styled.div`
  margin-bottom: 2rem;
`

const BlockList = ({ list }) => (
  <BlockListWrap>
    <TitleH2>
      {list.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom>
      {list.content}
    </Typography>
    <LinkButton toLink={list.link}>
      {`${list.title}のページ`}
    </LinkButton>
    <Divider component="div" />
  </BlockListWrap>
);

BlockList.propTypes = {
  list: PropTypes.shape({}).isRequired,
};

export default BlockList;
