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
import { useRouter } from 'next/router';
import { LoginValidation } from '../../validator/login.validator';

const AuthPage: NextPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { mutateAsync } = useMutation(
    queryKeys.postSignup,
    (loginData: ILoginData) => {
      return authService.login(loginData);
    },
    {
      onSuccess: (data) => {
        if (data) {
          setError('');
          const { access, refresh, username } = data;
          localStorage.setItem('ACCESS_TOKEN', access);
          localStorage.setItem('REFRESH_TOKEN', refresh);
          localStorage.setItem('USERNAME', username);
          router.push('/');
        } else {
          setError(
            'Something went wrong. Please check your credentials and try again ',
          );
        }
      },
      onMutate: () => {
        setError('');
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
      <Styled.AuthBg>
        <Image src={AuthBg.src} alt="auth bg ing" layout="fill" />
      </Styled.AuthBg>
      <Formik
        initialValues={LoginInitialData}
        onSubmit={handleSubmit}
        validateOnBlur
        validationSchema={LoginValidation}
      >
        {({ errors }) => (
          <Styled.InputWrapper method="post" className="login">
            <Styled.FormTitle className="login">Log in</Styled.FormTitle>
            {LoginInputs.map((input, ind) => (
              <AuthInputField
                key={ind}
                type={input.type}
                placeholder={input.placeholder}
                label={input.label}
                name={input.name}
                // @ts-ignore
                error={errors[input.name]}
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
            {error.length > 0 && (
              <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
            )}
          </Styled.InputWrapper>
        )}
      </Formik>
    </Styled.AuthWrapper>
  );
};

export default AuthPage;
