import { useEffect } from "react";
import { Html } from "@react-three/drei";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DimensionModeAtom, IsEnteredAtom } from "../../stores";
import styled from "styled-components";
import EnterBtn from "./EnterBtn";
import { loadingAniTime } from "../../data/constants";

export default function Loader() {
  const setIsEntered = useSetRecoilState(IsEnteredAtom);
  const DimensionMode = useRecoilValue(DimensionModeAtom);

  const onclick = () => setIsEntered(true);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setIsEntered(true), loadingAniTime * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [setIsEntered]);

  return (
    <>
      {DimensionMode === "3D" && (
        <Html center>
          <EnterBtn onclick={onclick} />
        </Html>
      )}
      {DimensionMode === "2D" && (
        <Wrap>
          <EnterBtn onclick={onclick} />
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
