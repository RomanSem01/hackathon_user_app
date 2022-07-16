import { Form } from 'formik';
import styled from 'styled-components';
import themes from '../constants/themes';

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const AuthBgWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const AuthContainer = styled.div`
  position: absolute;
  width: ${themes.boxSizes.authContainerWidth};
  height: ${themes.boxSizes.authContainerHeight};
  top: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: ${themes.spacing.tertiary};
`;

export const InputWrapper = styled(Form)`
  position: absolute;
  width: ${themes.boxSizes.authContainerWidth};
  height: ${themes.boxSizes.authContainerHeight};
  top: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${themes.font.family.poppins};

  &.login {
    margin-top: 70px;
    /* margin-top: 170px; */
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 0;
`;

export const FormButton = styled.button`
  position: relative;
  margin-top: 20px;
  height: 50px;
  width: 310px;
  margin-left: 12px;
  border-radius: ${themes.spacing.primary};
  border: none;
  outline: none;
  font-size: ${themes.font.size.tertiary};
  font-weight: ${themes.font.weight.bold};
  background: ${themes.colors.authBtn};

  &:focus {
    outline: none;
  }
`;

export const FormMessage = styled.p`
  position: relative;
`;

export const Link = styled.a`
  color: ${themes.colors.authBtn};
  text-decoration: underline;
`;
