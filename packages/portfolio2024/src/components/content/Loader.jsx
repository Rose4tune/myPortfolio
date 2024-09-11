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
      timeout = setTimeout(() => setIsEntered(true), 5000);

      return () => {
        clearTimeout(timeout);
      };
    }, [isEntered, setIsEntered]);
  }

  return (
    <Html center>
      <EnterBtn onClick={() => setIsEntered(true)}>
        <img src="/icons/mainCharacter.svg" alt="rose fortune cookie" />
        <span>click !</span>
      </EnterBtn>
    </Html>
  );
}

const blink = keyframes`
  0% {
    opacity: 1;
    margin-top: -.5rem;
  }
  50% {
    opacity: 0.4;
    margin-top: .5rem;
  }
  100% {
    opacity: 1;
    margin-top: -.5rem;
  }
`;

const EnterBtn = styled.div`
  animation: ${blink} 1.3s infinite;
  transition-duration: 0.4s;
  cursor: pointer;
  text-align: center;
  font-family: "Rammetto One";
  color: #fff;
  &:hover {
    animation: none;
  }

  span {
    display: block;
    margin-top: 1rem;
    transform: translateX(-5%);
  }
`;
