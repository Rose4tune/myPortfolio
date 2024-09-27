import { atom } from "recoil";

export const IsEnteredAtom = atom({
  key: "IsEnteredAtom",
  default: false,
});

export const DimensionModeAtom = atom({
  key: "DimensionModeAtom",
  default: "3D",
});
