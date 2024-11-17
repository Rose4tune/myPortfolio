import { atom } from "recoil";
import { v1 } from "uuid";

export const IsEnteredAtom = atom({
  key: `IsEnteredAtom/${v1()}`,
  default: false,
});

export const DimensionModeAtom = atom({
  key: `DimensionModeAtom/${v1()}`,
  default: "3D",
});

export const ThemeModeAtom = atom({
  key: "ThemeModeAtom",
  default: "light",
});

export const ShowNavAtom = atom({
  key: "ShowNavAtom",
  default: false,
});

export const ActiveNavAtom = atom({
  key: "ActiveNavAtom",
  default: false,
});

export const LanguageAtom = atom({
  key: "LanguageAtom",
  default: "ko",
});

export const windowSizeAtom = atom({
  key: "windowSizeAtom",
  default: {
    width: window.innerWidth,
    height: window.innerHeight,
    device: "desktop",
    orientation: "landscape",
  },
});
