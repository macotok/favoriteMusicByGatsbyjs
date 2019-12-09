import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
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
  ${LinkAnimation}
`;

const HeaderNav = () => (
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
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <NavItem>
              <ManuItem to={item.url} key={item.title}>
                {item.title}
              </ManuItem>
            </NavItem>
          ))};
        </NavList>
      </nav>
  )} />
);

export default HeaderNav;

