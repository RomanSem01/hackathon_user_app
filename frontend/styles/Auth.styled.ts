import { Form } from 'formik';

import styled from 'styled-components';
import themes from '../constants/themes';

export const AuthWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled(Form)`
  overflow: hidden;
  position: absolute;
  width: ${themes.boxSizes.authContainerWidth};
  min-height: ${themes.boxSizes.authContainerHeight};
  margin: 20px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${themes.font.family.poppins};
  background-color: rgba(8, 90, 127, 0.4);
  background-image: linear-gradient(
    315deg,
    rgba(8, 90, 127, 0.4) 0%,
    rgba(13, 50, 77, 0.4) 74%
  );
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: ${themes.spacing.tertiary};

  &.login {
    margin-top: 80px;
  }
`;

export const AuthBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

export const FormTitle = styled.h1`
  margin-bottom: 0;
  &.login {
    margin-top: 70px;
  }
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

  &:active {
    background: ${themes.colors.authBtnHover};
  }
`;

export const FormMessage = styled.p`
  position: relative;
`;

export const Link = styled.a`
  color: ${themes.colors.authBtn};
  text-decoration: underline;
`;

export const ErrorMessage = styled.div`
  background-color: ${themes.colors.errorMsg};
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
  font-weight: ${themes.font.weight.bold};
  font-size: ${themes.font.size.oneAndHalf};
  border-radius: 1rem;
  border: 5px solid ${themes.colors.errorBorderMsg};
  width: 80%;
  padding: 0 2rem;
`;
