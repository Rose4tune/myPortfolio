import { useRecoilValue, useSetRecoilState } from "recoil";
import { DimensionModeAtom, LanguageAtom, ShowNavAtom } from "../../stores";
import styled from "styled-components";

const ModeBar = () => {
  const showNav = useRecoilValue(ShowNavAtom);
  const setDemension = useSetRecoilState(DimensionModeAtom);
  const setLanguage = useSetRecoilState(LanguageAtom);

  const getTargetValue = (e) => {
    const selectedIndex = e.target.selectedIndex;
    return e.target[selectedIndex].value;
  };

  const handleDimension = (e) => setDemension(getTargetValue(e));
  const handleLanguage = (e) => setLanguage(getTargetValue(e));

  return (
    <Wrap className={`nav ${!showNav ? "show" : "hide"}`}>
      <select id="dimensionSelect" onChange={handleDimension}>
        <option name="dimension" value={"2D"}>
          2D
        </option>
        <option name="dimension" value={"3D"}>
          3D
        </option>
      </select>
      <select id="languageSelect" onChange={handleLanguage}>
        <option name="language" value="kor">
          한국어
        </option>
        <option name="language" value="eng">
          English
        </option>
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
`;

export default ModeBar;
