import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import { Html } from "@react-three/drei";
import Loader from "./Loader";

export default function Space() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return <Html center>hello</Html>;
  }
  return <Loader isCompleted />;
}
