import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import { introTexts } from "../../data/constants";
import styled from "styled-components";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        {introTexts.map((text, i) => {
          return <IntroTextBox>{text}</IntroTextBox>;
        })}
      </>
    );
  }
  return <Loader isCompleted />;
}
const IntroTextBox = styled.div`
  display: block;
  font-family: "Rammetto One";
  font-size: 10rem;
  color: var(--pink-fore-030);
`;
