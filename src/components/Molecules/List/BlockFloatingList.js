import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import TitleH4 from '../../Atoms/Title/TitleH4';
import { BlockListWrap, BlockListItem, BlockList, BlockListImage} from './BlockFloatingListSatyled';
import { propShape } from '../../../helpers/propTypes';

const BlockFloatingList = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpKeymusician{
        edges{
          node{
            id
            title
            content
            acf{
              photo_url {
                source_url
              }
            }
          }
        }
      }
    }`} render={props => (
      <BlockListWrap>
        {props.allWordpressWpKeymusician.edges.map(keyMusicianItem => (
          <BlockListItem key={keyMusicianItem.node.id}>
            <TitleH4>
              {keyMusicianItem.node.title}
            </TitleH4>
            <BlockListImage src={keyMusicianItem.node.acf.photo_url.source_url} alt={keyMusicianItem.node.title} />
            <BlockList dangerouslySetInnerHTML={{ __html: keyMusicianItem.node.content}} />
          </BlockListItem>
        ))}
      </BlockListWrap>
    )}
  />
);

BlockFloatingList.propTypes = {
  allWordpressWpKeymusician: propShape(),
};

export default BlockFloatingList;
