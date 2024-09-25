import { atom } from "recoil";

export const IsEnteredAtom = atom({
  key: "IsEnteredAtom",
  default: false,
});

export const DimensionAtom = atom({
  key: "DimensionAtom",
  default: "3D",
});
