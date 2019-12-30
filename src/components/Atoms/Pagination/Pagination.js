import React from 'react';
import { PageNumberWrapper, PageNumber } from './PaginationStyled';
import { propNumber, propShape, propString } from '../../../helpers/propTypes';

const Pagination = ({ pageContext, pathName }) => (
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

Pagination.propTypes = {
  pageContext: propShape({
    numberOfPages: propNumber(),
    currentPage: propNumber(),
  }).isRequired,
  pathName: propString().isRequired,
};

export default Pagination;
