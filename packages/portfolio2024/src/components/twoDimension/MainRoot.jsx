import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import Intro from "./Intro";
import About from "./About";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        <Intro />
        <About />
      </>
    );
  }
  return <Loader isCompleted />;
}
