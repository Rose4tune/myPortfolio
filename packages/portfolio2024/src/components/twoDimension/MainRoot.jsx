import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        <div>hello</div>
      </>
    );
  }
  return <Loader isCompleted />;
}
