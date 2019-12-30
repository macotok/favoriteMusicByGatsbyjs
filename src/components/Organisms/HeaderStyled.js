import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export const HeaderInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  width: 1000px;
  height: 100%;
`;
