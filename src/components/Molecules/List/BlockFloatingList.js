import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import TitleH4 from '../../Atoms/TitleH4';

const BlockListWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const BlockListItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  margin: 16px;
  padding: 16px;
`;

const BlockListImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const BlockList = styled.div`
  text-align: center;
`;

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

export default BlockFloatingList;
