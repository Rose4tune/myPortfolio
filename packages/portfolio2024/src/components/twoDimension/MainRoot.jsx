import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import styled from "styled-components";
import Home from "./pages/home";
import Nav from "./elements/Nav";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <div className="container">
        <Nav />
        <Home />
        {/* <MenuBtn>
          <img src="/icons/mainCharacter.svg" alt="rose's fortune cookie" />
        </MenuBtn> */}
      </div>
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
