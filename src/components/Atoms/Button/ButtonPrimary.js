import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const ButtonStyle = styled(Button)`
  color: white;
  text-transform: none;
`;

const ButtonPrimary = ({ children }) => (
  <ButtonWrap>
    <ButtonStyle
      variant="contained"
      color="secondary"
      endIcon={<ArrowForwardIosIcon />}
    >
      {children}
    </ButtonStyle>
  </ButtonWrap>
);

export default ButtonPrimary;
