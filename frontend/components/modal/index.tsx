import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
// import useOutClicked from '../../hooks/useOuterClick';
import closeIcon from '../../public/closeIcon.svg';
import * as Styled from '../../styles/modal.styled';

const Modal = ({
  text,
  handleClose,
}: {
  text: string;
  handleClose: () => void;
}) => {
  return (
    <Styled.ModalContainer>
      <Styled.ModalWrapper>
        <Styled.ImageWrapper onClick={handleClose}>
          <Image src={closeIcon.src} alt="modal close icon" layout="fill" />
        </Styled.ImageWrapper>
        <Styled.Header>{text}</Styled.Header>
      </Styled.ModalWrapper>
    </Styled.ModalContainer>
  );
};

export default Modal;
