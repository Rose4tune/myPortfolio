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
        <span>click!</span>
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

const EnterBtn = styled.div`
  animation: ${blink} 1.2s infinite;
  transition-duration: 0.4s;
  cursor: pointer;
  text-align: center;
  &:hover {
    animation: none;
  }
`;
