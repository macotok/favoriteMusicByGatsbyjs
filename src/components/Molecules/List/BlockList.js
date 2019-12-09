import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TitleH2 from '../../Atoms/TitleH2';
import LinkButton from '../../Atoms/LinkButton';

const BlockList = ({ list }) => (
  <div>
    <TitleH2>
      {list.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom>
      {list.content}
    </Typography>
    <LinkButton toLink={list.link}>
      {`${list.title}のページ`}
    </LinkButton>
  </div>
);

BlockList.propTypes = {
  list: PropTypes.shape({}).isRequired,
};

export default BlockList;
