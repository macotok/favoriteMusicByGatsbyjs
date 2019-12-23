import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import LinkAnimation from '../../../styled/Common';

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 8px 16px;
`;

const ManuItem = styled(Link)`
  color: white;
  display: block;
  ${props => props.current ? css`
    border-bottom: 1px solid white;
    text-decoration: none;
  ` : css`
    ${LinkAnimation}
  `}
`;

const HeaderNav = ({ pathname }) => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Main menu"
        }
      }){
        edges{
          node{
            items{
              title
              url
            }
          }
        }
      }
    }
  `} render={props => (
    <nav>
      <NavList>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, index) => {
          const isCurrentPage = (pathname.split('/')[1]  || 'home') === (item.title).toLowerCase();
          return (
            <NavItem key={index}>
              <ManuItem
                to={item.url}
                key={item.title}
                current={isCurrentPage ? 1 : 0}
              >
                {item.title}
              </ManuItem>
            </NavItem>
          );
        })};
      </NavList>
    </nav>
  )}/>
);

export default HeaderNav;

