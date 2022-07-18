import React, { useState } from 'react';
import type { NextPage } from 'next';
import * as Styled from '../../styles/auth.styled';
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
import { SignupValidation } from '../../validator/signup.validator';
import AuthBg from '../../public/authBg.jpg';
import Image from 'next/image';

const AuthPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { mutateAsync } = useMutation(
    queryKeys.postSignup,
    (signupData: ISignupData) => {
      return authService.register(signupData);
    },
    {
      onSuccess: (data) => {
        if (data) {
          setError('');
          !data?.is_active && setIsOpen(true);
        } else {
          setError(
            'Something went wrong. Try to input another username or email',
          );
        }
      },
      onMutate: () => {
        setError('');
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
      <Styled.AuthBg>
        <Image src={AuthBg.src} alt="auth bg ing" layout="fill" />
      </Styled.AuthBg>
      <Formik
        initialValues={SignupInitialData}
        onSubmit={handleSubmit}
        validateOnBlur
        validationSchema={SignupValidation}
      >
        {({ errors }) => (
          <Styled.InputWrapper method="post">
            <Styled.FormTitle>Registration</Styled.FormTitle>
            {SignupInputs.map((input, ind) => {
              const { name } = input;
              return (
                <AuthInputField
                  key={ind}
                  type={input.type}
                  placeholder={input.placeholder}
                  label={input.label}
                  name={name}
                  // @ts-ignore
                  error={errors[name]}
                />
              );
            })}
            <Styled.FormButton type="submit">Submit</Styled.FormButton>
            <Styled.FormMessage>
              Already have an account?{' '}
              <Styled.Link href="/login">Login</Styled.Link>
            </Styled.FormMessage>
            {error.length > 0 && (
              <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
            )}
          </Styled.InputWrapper>
        )}
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
