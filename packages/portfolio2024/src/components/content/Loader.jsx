import { useEffect } from "react";
import { Html } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { IsEnteredAtom } from "../../stores";
import styled, { keyframes } from "styled-components";

export default function Loader() {
  const [isEntered, setIsEntered] = useRecoilState(IsEnteredAtom);

  if (isEntered) {
    return null;
  } else {
    useEffect(() => {
      let timeout;
      timeout = setTimeout(() => setIsEntered(true), 10000);
      return () => {
        clearTimeout(timeout);
      };
    }, [isEntered, setIsEntered]);
  }

  return (
    <Html center>
      <EnterBtn>
        <EnterIcon onClick={() => setIsEntered(true)}>
          <img src="/icons/mainCharacter.svg" alt="rose fortune cookie" />
        </EnterIcon>
        <EnterBtnText>click !</EnterBtnText>
      </EnterBtn>
    </Html>
  );
}

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(-.3rem);
  }
  50% {
    transform: translateY(.3rem);
  }
  100% {
    transform: translateY(-.3rem);
  }
`;

const EnterBtn = styled.button`
  &:hover {
    div {
      animation: none;
      opacity: 1;
    }
    span {
      display: none;
    }
  }
`;

const EnterIcon = styled.div`
  width: 15vw;
  max-width: 195px;
  animation: ${bounce} 1.3s ease-out infinite;
  transition-duration: 0.4s;
  cursor: pointer;
  opacity: 0.7;
  
`;

const EnterBtnText = styled.span`
  animation: ${blink} 1.3s infinite;
  transition-duration: 0.4s;
  display: block;
  margin-top: 1rem;
  transform: translateX(-5%);
  font-family: "Rammetto One";
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
