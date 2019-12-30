import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import { SiteInfoWrapper, SiteTitle, SiteDescription } from './SiteInfoStyled';
import { propShape } from '../../helpers/propTypes';

const SiteInfo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressSiteMetadata{
        edges{
          node{
            name
            description
          }
        }
      }
    }
  `} render={props => (
    <SiteInfoWrapper>
      <SiteTitle>
        {props.allWordpressSiteMetadata.edges[0].node.name}
        <MusicNoteOutlinedIcon style={{ position: 'relative', top: 5, width: 30 }}/>
      </SiteTitle>
      <SiteDescription>
        {props.allWordpressSiteMetadata.edges[0].node.description}
      </SiteDescription>
    </SiteInfoWrapper>
  )} />
);

SiteInfo.propTypes = {
  allWordpressSiteMetadata: propShape(),
};

export default SiteInfo;
