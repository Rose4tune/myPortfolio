import { atom } from "recoil";
import { v1 } from "uuid";

export const IsEnteredAtom = atom({
  key: `IsEnteredAtom/${v1()}`,
  default: false,
});

export const DimensionModeAtom = atom({
  key: `DimensionModeAtom/${v1()}`,
  default: "2D",
});

export const showNavAtom = atom({
  key: `showNav`,
  default: false,
});
