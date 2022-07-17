import styled from 'styled-components';
import themes from '../constants/themes';

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.colors.activationBg};
`;
export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${themes.colors.activationBox};
  font-family: ${themes.font.family.poppins};
  font-size: ${themes.font.size.oneAndHalf};
  font-weight: ${themes.font.weight.bold};
`;
