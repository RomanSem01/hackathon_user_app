import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as Styled from '../../styles/Auth.styled';
import AuthBg from '../../public/authBg.jpg';
import AuthInputField from '../../components/AuthInputField';

const AuthPage: NextPage = () => {
  return (
    <Styled.AuthWrapper>
      <Styled.AuthBgWrapper>
        <Image src={AuthBg.src} alt="auth bg img" layout="fill" />
      </Styled.AuthBgWrapper>
      <Styled.AuthContainer />
      <Styled.InputWrapper>
        <Styled.FormTitle>Registration</Styled.FormTitle>
        <AuthInputField type="text" placeholder=" " label="Username" />
        <AuthInputField type="email" placeholder=" " label="Email" />
        <AuthInputField type="password" placeholder=" " label="Password" />
        <AuthInputField
          type="password"
          placeholder=" "
          label="Re-enter Password"
        />
      </Styled.InputWrapper>
    </Styled.AuthWrapper>
  );
};

export default AuthPage;
