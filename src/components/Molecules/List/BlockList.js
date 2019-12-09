import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import TitleH2 from '../../Atoms/TitleH2';

const BlockList = ({ list }) => (
  <div>
    <TitleH2>
      {list.title}
    </TitleH2>
    <Typography variant="body1" gutterBottom>
      {list.content}
    </Typography>
    <Button variant="contained" color="secondary">
      <Link to={list.link}>to Page</Link>
    </Button>
  </div>
);

BlockList.propTypes = {
  list: PropTypes.shape({}).isRequired,
}

export default BlockList;
