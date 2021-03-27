import React from "react";
import styled from "styled-components";
import { Illustrations, CloseIcon } from "../assets";
import { typeScale } from "../utils";
import { PrimaryButton } from "./buttons";
import { animated, useSpring, config } from "react-spring";

const ModalWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const ImageWrapper = styled.div`
  max-width: 380px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    width: "100%",
    maxWidth: "800",
    config: config.slow,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <ImageWrapper>
          <Image
            src={Illustrations.SignUp}
            alt="Sign up Illustration"
            aria-hidden="true"
          />
        </ImageWrapper>
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access</SignUpText>
        <PrimaryButton>Sign up!</PrimaryButton>
        <CloseModalButton
          aria-label="close-modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
