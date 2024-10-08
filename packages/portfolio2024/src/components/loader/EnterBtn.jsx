import styled, { keyframes } from "styled-components";
import { loadingAniTime } from "../../data/constants";

const animaStopDuration = 0.5;
const animaDelay = loadingAniTime - (1 + animaStopDuration);

export default function EnterBtn({ onclick }) {
  return (
    <BtnWrap>
      <Icon onClick={onclick}>
        <img src="/icons/mainCharacter.svg" alt="rose's fortune cookie" />
      </Icon>
      <Text>click !</Text>
    </BtnWrap>
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

const BtnWrap = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    div {
      animation:
        ${bounceStop} ${animaStopDuration}s ease-out 0s 1 forwards,
        ${fadeIn} ${animaStopDuration}s ease-in 0s 1 forwards;

      &::after {
        opacity: 0.6;
        transition: opacity ${animaStopDuration}s;
      }
    }

    span {
      animation: ${fadeOut} ${animaStopDuration}s ease-out 0s 1 forwards;
    }
  }
`;

const Icon = styled.div`
  width: 15vw;
  max-width: 195px;
  animation:
    ${bounce} 1s ease-out infinite,
    ${bounceStop} ${animaStopDuration}s ease-out ${animaDelay}s forwards,
    ${fadeIn} ${animaStopDuration}s ease-in ${animaDelay}s forwards;
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

const Text = styled.span`
  animation:
    ${blink} 1s ease-in-out infinite,
    ${fadeOut} ${animaStopDuration}s ease-out ${animaDelay}s forwards;
  display: block;
  margin-top: 1rem;
  transform: translateX(-5%);
  font-family: "Rammetto One";
  text-align: center;
  color: hsl(var(--pink-fore-030));
`;
