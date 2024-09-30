import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import Intro from "./Intro";
import Introduce from "./Introduce";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        <Intro />
        <Introduce />
      </>
    );
  }
  return <Loader isCompleted />;
}
