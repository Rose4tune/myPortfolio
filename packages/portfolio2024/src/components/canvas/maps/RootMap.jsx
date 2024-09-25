import { useRecoilValue } from "recoil";
import { DimensionAtom } from "../../../stores";
import Space from "./3D/Space";

export default function RootMap() {
  const currentDimension = useRecoilValue(DimensionAtom);
  return <>{currentDimension === "3D" && <Space />}</>;
}
