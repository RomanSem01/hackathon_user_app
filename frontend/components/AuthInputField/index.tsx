import React from 'react';
import * as Styled from '../../styles/AuthInput.styled';
import { IAuthProps } from '../../types/AuthInput.types';

const AuthInputField = ({ type, placeholder, label }: IAuthProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.InputContainer>
        <Styled.Input type={type} placeholder={placeholder} />
        <Styled.InputLabel>{label}</Styled.InputLabel>
      </Styled.InputContainer>
    </Styled.InputWrapper>
  );
};

export default AuthInputField;
