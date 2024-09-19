window.addEventListener("DOMContentLoaded", (e) => {
  let colorMode = window.localStorage.getItem("color_mode");
  const systemColorMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const setColorMode = () => {
    window.localStorage.setItem("color_mode", systemColorMode);
    colorMode = systemColorMode;
  };

  if (!colorMode) {
    setColorMode();
  } else if (systemColorMode !== colorMode) {
    alert(
      "기본 모드는 기기의 화면모드와 같이 바뀝니다. 기기의 화면모드가 변경되었으므로, 기본 모드가 변경 됩니다. 모드 설정에서 다시 변경이 가능합니다."
    );
    setColorMode();
  }

  document.body.style.background = colorMode === "dark" ? "#121212" : "#fff";
  document.documentElement.setAttribute("color-theme", colorMode);
});
