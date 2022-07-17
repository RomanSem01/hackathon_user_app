import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as Styled from '../../styles/auth.styled';
import AuthBg from '../../public/authBg.jpg';
import AuthInputField from '../../components/auth-input-field';
import { Formik, FormikHelpers } from 'formik';
import {
  SignupInitialData,
  SignupInputs,
} from '../../constants/form.constants';
import { ISignupData } from '../../types/auth.types';
import { useMutation } from 'react-query';
import { queryKeys } from '../../constants/query-keys.constants';
import { authService } from '../../services/auth.service';
import Modal from '../../components/modal';

const AuthPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutateAsync } = useMutation(
    queryKeys.postSignup,
    (signupData: ISignupData) => {
      return authService.register(signupData);
    },
    {
      onSuccess: (data) => {
        console.log(data);

        !data?.is_active && setIsOpen(true);
      },
    },
  );
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = (
    values: ISignupData,
    actions: FormikHelpers<ISignupData>,
  ) => {
    mutateAsync(values);
    actions.resetForm();
  };
  return (
    <Styled.AuthWrapper>
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
            Already have an account?{' '}
            <Styled.Link href="/login">Login</Styled.Link>
          </Styled.FormMessage>
        </Styled.InputWrapper>
      </Formik>
      {isOpen && (
        <Modal
          text="Please click the activation link that we have sent to your email!"
          handleClose={handleModalClose}
        />
      )}
    </Styled.AuthWrapper>
  );
};

export default AuthPage;
