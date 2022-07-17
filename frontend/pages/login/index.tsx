import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as Styled from '../../styles/auth.styled';
import AuthBg from '../../public/authBg.jpg';
import AuthInputField from '../../components/auth-input-field';
import { Formik, FormikHelpers } from 'formik';
import { LoginInitialData, LoginInputs } from '../../constants/form.constants';
import { ILoginData } from '../../types/auth.types';
import { useMutation } from 'react-query';
import { authService } from '../../services/auth.service';
import { queryKeys } from '../../constants/query-keys.constants';
import Modal from '../../components/modal';

const AuthPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutateAsync } = useMutation(
    queryKeys.postSignup,
    (loginData: ILoginData) => {
      return authService.login(loginData);
    },
    {
      onSuccess: (data) => {
        if (data) {
          const { access, refresh } = data;
          localStorage.setItem('ACCESS_TOKEN', access);
          localStorage.setItem('REFRESH_TOKEN', refresh);
        }
      },
    },
  );

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = (
    values: ILoginData,
    action: FormikHelpers<ILoginData>,
  ) => {
    mutateAsync(values);
    action.resetForm();
  };
  return (
    <Styled.AuthWrapper>
      <Styled.AuthBgWrapper>
        <Image src={AuthBg.src} alt="auth bg img" layout="fill" />
      </Styled.AuthBgWrapper>
      <Styled.AuthContainer />
      <Formik initialValues={LoginInitialData} onSubmit={handleSubmit}>
        <Styled.InputWrapper method="post" className="login">
          <Styled.FormTitle>Log in</Styled.FormTitle>
          {LoginInputs.map((input, ind) => (
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
          {isOpen && (
            <Modal
              text="Please activate your account!"
              handleClose={handleClose}
            />
          )}
        </Styled.InputWrapper>
      </Formik>
    </Styled.AuthWrapper>
  );
};

export default AuthPage;
