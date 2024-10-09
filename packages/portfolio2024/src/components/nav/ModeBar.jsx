import { useRecoilValue, useSetRecoilState } from "recoil";
import { DimensionModeAtom, showNavAtom } from "../../stores";

const ModeBar = () => {
  const showNav = useRecoilValue(showNavAtom);
  const setDemension = useSetRecoilState(DimensionModeAtom);

  const handleDimension = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setDemension(e.target[selectedIndex].value);
  };

  return (
    <div className={`nav ${!showNav ? "show" : "hide"}`}>
      <select id="dimensionSelect" onChange={handleDimension}>
        <option name="dimension" value={"2D"}>
          2D
        </option>
        <option name="dimension" value={"3D"}>
          3D
        </option>
      </select>
      <div>
        <input type="color" name="theme" id="themeSelect" hidden />
      </div>
    </div>
  );
};

export default ModeBar;
