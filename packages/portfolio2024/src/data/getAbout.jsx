export const getGreetings = (language) =>
  ({
    ko: (
      <>
        보다 효율적인 <span className="boldUpper">개발</span>과{" "}
        <span className="boldUpper">소통</span>을 위해{"\n"}
        <span className="boldUpper">끊임없이 고민하고 생각하는</span>
        {"\n"}
        개발자 <span className="boldUpper">이예서</span>입니다.
      </>
    ),
    en: (
      <>
        I’m <span className="boldUpper">Rose</span>, who is{" "}
        <span style={{ fontWeight: 600 }}>constantly thinking</span> about
        {"\n"}
        for <span className="boldUpper">more efficient development</span>
        {"\n"}
        and <span className="boldUpper">communication</span>
      </>
    ),
  }[language]);

export const getSayHello = (language) =>
  ({
    ko: (
      <p
        className="font_cafe24Supermagic"
        style={{ transform: "scale(.8) translate(15%, 20%)" }}
      >
        안녕하세요
      </p>
    ),
    en: <p className="font_rampartOne">Hello</p>,
  }[language]);
