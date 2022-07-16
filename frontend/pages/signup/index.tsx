import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as Styled from '../../styles/auth.styled';
import AuthBg from '../../public/authBg.jpg';
import AuthInputField from '../../components/auth-input-field';
import { Formik } from 'formik';
import {
  SignupInitialData,
  SignupInputs,
} from '../../constants/form.constants';
import { ISignupData } from '../../types/auth.types';

const AuthPage: NextPage = () => {
  const handleSubmit = (values: ISignupData) => {
    console.log(values);
  };
  return (
    <Styled.AuthWrapper>
      <Styled.AuthBgWrapper>
        <Image src={AuthBg.src} alt="auth bg img" layout="fill" />
      </Styled.AuthBgWrapper>
      <Styled.AuthContainer />
      <Formik initialValues={SignupInitialData} onSubmit={handleSubmit}>
        <Styled.InputWrapper method="post">
          <Styled.FormTitle>Registration</Styled.FormTitle>
          {SignupInputs.map((input, ind) => (
            <AuthInputField
              key={ind}
              type={input.type}
              placeholder={input.placeholder}
              label={input.label}
              name={input.name}
            />
          ))}
          <Styled.FormButton type="submit">Submit</Styled.FormButton>
          <Styled.FormMessage>
            Don&#39;t have an account?{' '}
            <Styled.Link href="/signup">Signup</Styled.Link>
          </Styled.FormMessage>
        </Styled.InputWrapper>
      </Formik>
    </Styled.AuthWrapper>
  );
};

export default AuthPage;

