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
      timeout = setTimeout(() => setIsEntered(true), 6000);
      return () => {
        clearTimeout(timeout);
      };
    }, [isEntered, setIsEntered]);
  }

  return (
    <Html center>
      <EnterWrap>
        <EnterIcon onClick={() => setIsEntered(true)}>
          <img src="/icons/mainCharacter.svg" alt="rose fortune cookie" />
        </EnterIcon>
        <EnterBtnText>click !</EnterBtnText>
      </EnterWrap>
    </Html>
  );
}

const blink = keyframes`
  0% {
    opacity: .4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .4;
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

const bounceStop = keyframes`
  0% {
    transform: translateY(.3rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

const EnterWrap = styled.div`
  &:hover {
    div {
      animation:
        ${bounceStop} .5s ease-out 0 forwards,
        ${fadeIn} .5s ease-in forwards;

      &::after {
        opacity: 0.4;
        transition: opacity 0.5s;
      }
    }

    span {
      animation: ${fadeOut} .5s ease-out forwards;
    }
  }
`;

const EnterIcon = styled.div`
  width: 15vw;
  max-width: 195px;
  animation:
    ${bounce} 1s ease-out infinite,
    ${bounceStop} .5s ease-out 4.5s forwards,
    ${fadeIn} .5s ease-in 4.5s forwards;
  cursor: pointer;
  opacity: 0.7;

  &::after {
    display: block;
    content: "";
    width: 20%;
    height: .7vw;
    margin: auto;
    background: radial-gradient(#aaa, transparent);
    border-radius: 100%;
    transform: translate(-1vw, .5rem);
    opacity: 0;
  }
`;

const EnterBtnText = styled.span`
  animation:
    ${blink} 1s ease-in-out infinite,
    ${fadeOut} .5s ease-out 4.5s forwards;
  display: block;
  margin-top: 1rem;
  transform: translateX(-5%);
  font-family: "Rammetto One";
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
