import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  DimensionModeAtom,
  LanguageAtom,
  ShowNavAtom,
  ThemeModeAtom,
} from "../../stores";
import styled from "styled-components";

const ModeBar = () => {
  const showNav = useRecoilValue(ShowNavAtom);
  const setDemension = useSetRecoilState(DimensionModeAtom);
  const setLanguage = useSetRecoilState(LanguageAtom);
  const setTheme = useSetRecoilState(ThemeModeAtom);

  const getTargetValue = (e) => {
    const selectedIndex = e.target.selectedIndex;
    return e.target[selectedIndex].value;
  };

  const handleDimension = (e) => setDemension(getTargetValue(e));
  const handleLanguage = (e) => setLanguage(getTargetValue(e));
  const handleTheme = (e) => {
    const colorMode = getTargetValue(e);
    setTheme(colorMode);
    document.body.style.background =
      colorMode === "dark" ? "hsl(0, 0%, 12%)" : "#fff";
    document.documentElement.setAttribute("color-theme", colorMode);
  };

  return (
    <Wrap className={`nav ${showNav ? "show" : "hide"}`}>
      <select
        aria-label="dimensionSelect"
        name="dimension"
        onChange={handleDimension}
      >
        <option value={"2D"}>2D</option>
        <option value={"3D"}>3D</option>
      </select>
      <select
        aria-label="themeSelect"
        name="theme"
        onChange={handleTheme}
        hidden
      >
        <option value={"light"}>light</option>
        <option value={"dark"}>dark</option>
      </select>
      <select
        aria-label="languageSelect"
        name="language"
        onChange={handleLanguage}
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
      <div>
        <input type="color" name="theme" id="themeSelect" hidden />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  &.hide {
    transform: translateY(-250%);
  }

`;

export default ModeBar;
