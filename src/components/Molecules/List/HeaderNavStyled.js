import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import LinkAnimation from '../../../styled/Common';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 8px 16px;
`;

export const MenuItem = styled(Link)`
  color: white;
  display: block;
  ${props => props.current ? css`
    border-bottom: 1px solid white;
    text-decoration: none;
  ` : css`
    ${LinkAnimation}
  `} : null;
`;
