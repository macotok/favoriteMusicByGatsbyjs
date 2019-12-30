import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { NavList, NavItem, MenuItem } from './HeaderNavStyled';
import { propShape, propString } from '../../../helpers/propTypes';

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
          let isCurrentPage;
          if (typeof window !== 'undefined') {
            isCurrentPage = (pathname.split('/')[1] || 'home') === (item.title).toLowerCase();
          }
          return (
            <NavItem key={index}>
              <MenuItem
                to={item.url}
                key={item.title}
                current={isCurrentPage ? 1 : 0}
              >
                {item.title}
              </MenuItem>
            </NavItem>
          );
        })};
      </NavList>
    </nav>
  )}/>
);

HeaderNav.propTypes = {
  pathname: propString().isRequired,
  allWordpressWpApiMenusMenusItems: propShape(),
};

export default HeaderNav;

