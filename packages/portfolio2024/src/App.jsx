import { useRecoilValue } from "recoil";
import MainCanvas from "./components/threeDimension/MainCanvas";
import { DimensionModeAtom } from "./stores";
import MainRoot from "./components/twoDimension/MainRoot";
import ModeBar from "./components/nav/ModeBar";

function App() {
  const DimensionMode = useRecoilValue(DimensionModeAtom);

  return (
    <>
      <ModeBar />
      {DimensionMode === "3D" && <MainCanvas />}
      {DimensionMode === "2D" && <MainRoot />}
    </>
  );
}

export default App;
