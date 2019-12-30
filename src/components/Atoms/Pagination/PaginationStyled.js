import styled from 'styled-components';
import { Link } from 'gatsby';

export const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background-color: ${props => props.isCurrentPage ? '#eee' : 'white'};
  margin: 2rem 0 4rem 1rem;
`;

export const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: ${props => props.theme.palette.primary.main};
  &:hover {
    background-color: #eee;
  }
`;
