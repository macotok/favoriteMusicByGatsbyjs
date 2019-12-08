import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

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
        {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
          <PortfolioItemm key={portfolioItem.node.id}>
            <h3>{portfolioItem.node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: portfolioItem.node.content}} />
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>
              Read more
            </Link>
          </PortfolioItemm>
        ))}
      </PortfolioItemsWrapper>
    )}
  />
);

export default PortfolioItems;
