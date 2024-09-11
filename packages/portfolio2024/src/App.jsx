import { RecoilRoot } from "recoil";
import MainCanvas from "./components/content/MainCanvas";
import styled from "styled-components";
import "./assets/css/reset.css";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <MainCanvas />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
