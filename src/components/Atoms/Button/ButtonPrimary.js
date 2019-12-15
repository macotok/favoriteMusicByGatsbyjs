import React from 'react';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const ButtonStyle = styled(Button)`
  color: white;
`;

const ButtonPrimary = ({ children }) => (
  <ButtonWrap>
    <ButtonStyle
      variant="contained"
      color="secondary"
      startIcon={<LinkIcon />}
    >
      {children}
    </ButtonStyle>
  </ButtonWrap>
);

export default ButtonPrimary;
