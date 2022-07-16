import styled from 'styled-components';
import themes from '../constants/themes';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 12;
  overflow-y: scroll;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(12, 16, 51, 0.75);
`;

export const ModalWrapper = styled.div`
  top: 0;
  width: 500px;
  height: 400px;
  background-color: ${themes.colors.secondary};
  border-radius: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Header = styled.h1`
  position: relative;
  white-space: break-spaces;
  font-weight: ${themes.font.weight.extraBold};
  text-align: center;
`;

export const ImageWrapper = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
