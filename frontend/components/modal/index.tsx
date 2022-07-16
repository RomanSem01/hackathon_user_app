import Image from 'next/image';
import React from 'react';
import closeIcon from '../../public/closeIcon.svg';
import * as Styled from '../../styles/modal.styled';

const Modal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Styled.ModalContainer>
      <Styled.ModalWrapper>
        <Styled.ImageWrapper onClick={handleClose}>
          <Image src={closeIcon.src} alt="modal close icon" layout="fill" />
        </Styled.ImageWrapper>
        <Styled.Header>
          Please click the activation link that we have sent to your email!
        </Styled.Header>
      </Styled.ModalWrapper>
    </Styled.ModalContainer>
  );
};

export default Modal;
