import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background-color: ${props => props.isCurrentPage ? '#eee' : 'white'};
  margin: 2rem 0 4rem 1rem;
`;

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: ${props => props.theme.palette.primary.main};
  &:hover {
    background-color: #eee;
  }
`;

const Pagination = ({pageContext, pathName}) => (
  <>
    {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
      <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
        <PageNumber to={index === 0 ? `/${pathName}` : `/${pathName}/${index + 1}`}>
          {index + 1}
        </PageNumber>
      </PageNumberWrapper>
    ))}
  </>
);

export default Pagination;
