import React from 'react';
import * as Styled from '../../styles/auth-input.styled';
import { IInputProps } from '../../types/auth.types';

const AuthInputField = ({
  type,
  placeholder,
  label,
  name,
  error,
}: IInputProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.InputContainer>
        <Styled.Input type={type} placeholder={placeholder} name={name} />
        <Styled.InputLabel>{label}</Styled.InputLabel>
      </Styled.InputContainer>
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </Styled.InputWrapper>
  );
};

export default AuthInputField;
