import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import Intro from "./Intro";
import About from "./About";
import styled from "styled-components";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        <Intro />
        <About />
        <MenuBtn>
          <img src="/icons/mainCharacter.svg" alt="rose's fortune cookie" />
        </MenuBtn>
      </>
    );
  }
  return <Loader isCompleted />;
}

const MenuBtn = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 15vw;
  max-width: 195px;
  transform: translate(-50%, -50%);
`;
