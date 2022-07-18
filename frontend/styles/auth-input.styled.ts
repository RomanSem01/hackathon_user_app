import { Field } from 'formik';
import styled from 'styled-components';
import themes from '../constants/themes';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 50px;
  width: 320px;
  padding-left: 12px;
`;

export const Input = styled(Field)`
  color: ${themes.colors.primary};
  border: none;
  padding: 5px ${themes.spacing.inputHorizontal};
  font-size: ${themes.font.size.primary};
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  bottom: 0px;
  border-radius: ${themes.spacing.primary};
  &:focus {
    outline: none;
  }

  &:focus,
  &:not(:placeholder-shown) {
    border-color: transparent;
    ~ label {
      font-size: ${themes.font.size.quinary};
      color: ${themes.colors.primary};
      top: 0.2rem;
      transform: translate(${themes.spacing.inputVertical}, -20%);
    }
  }

  &::-webkit-input-placeholder {
    color: transparent;
  }
  &::-moz-placeholder {
    color: transparent;
  }
  &:-ms-input-placeholder {
    color: transparent;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translate(${themes.spacing.inputVertical}, -50%);
  pointer-events: none;
  transition: all 0.14s ease-in-out;
  font-size: 14px;
  color: ${themes.colors.inputText};
`;

export const ErrorMessage = styled.span`
  color: ${themes.colors.deleteBtn};
  font-weight: ${themes.font.weight.bold};
  margin-left: 20px;
  font-size: ${themes.font.size.quinary};
`;
