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
  width: 600px;
  height: 500px;
  top: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: ${themes.spacing.tertiary};
`;

export const InputWrapper = styled.form`
  position: absolute;
  width: 600px;
  height: 500px;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${themes.font.family.poppins};
`;

export const FormTitle = styled.h1``;
