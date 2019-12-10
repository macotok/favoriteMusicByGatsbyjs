import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import keyMusician from '../../templates/keyMusician';

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PortfolioItemm = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  margin: 16px;
  padding: 16px;
`;

const PortfolioItems = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpKeymusician{
        edges{
          node{
            id
            title
            content
          }
        }
      }
    }`} render={props => (
      <PortfolioItemsWrapper>
        {props.allWordpressWpKeymusician.edges.map(keyMusicianItem => (
          <PortfolioItemm key={keyMusicianItem.node.id}>
            <h3>{keyMusicianItem.node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: keyMusicianItem.node.content}} />
          </PortfolioItemm>
        ))}
      </PortfolioItemsWrapper>
    )}
  />
);

export default PortfolioItems;
