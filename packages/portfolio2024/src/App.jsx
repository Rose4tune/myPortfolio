import { useRecoilValue } from "recoil";
import styled from "styled-components";
import MainCanvas from "./components/threeDimension/MainCanvas";
import { DimensionModeAtom } from "./stores";
import MainRoot from "./components/twoDimension/MainRoot";

function App() {
  const DimensionMode = useRecoilValue(DimensionModeAtom);

  return (
    <Wrapper>
      {DimensionMode === "3D" && <MainCanvas />}
      {DimensionMode === "2D" && <MainRoot />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
