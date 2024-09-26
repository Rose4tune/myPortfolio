import { useRecoilValue } from "recoil";
import styled from "styled-components";
import MainCanvas from "./components/canvas/MainCanvas";
import { DimensionAtom } from "./stores";
import MainPage from "./components/page/MainPage";

function App() {
  const currentDimension = useRecoilValue(DimensionAtom);
  return (
    <Wrapper>
      {currentDimension === "3D" && <MainCanvas />}
      {currentDimension === "2D" && <MainPage />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
