import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import Loader from "../loader/Loader";
import styled from "styled-components";
import Home from "./pages/home";

export default function MainPage() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  if (isEntered) {
    return (
      <>
        <Home />
      </>
    );
  }
  return <Loader isCompleted />;
}
