import React from "react";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../../stores";
import getData from "../../../../../api/getData";

const Caption = ({ type, getlink, lang, isBlock = false }) => {
  const language = useRecoilValue(LanguageAtom);
  const displayLang = lang ? lang : language;
  const captions = getData("captions");

  const renderCaptionLink = ({ linkText, link }, isBlock) => {
    return (
      <span className={`caption-link${isBlock ? " block" : ""}`}>
        <a href={link ? link : getlink} target="_blank">
          {linkText[displayLang]}
        </a>
      </span>
    );
  };

  if (captions.length === 0) return;
  const currentCaption = captions[type];

  return (
    <div
      className="caption"
      style={type === "more" ? { color: "hsl(var(--red-fore-010))" } : {}}
    >
      {currentCaption ? (
        <>
          {currentCaption.text[displayLang]}
          {renderCaptionLink(currentCaption, isBlock)}
        </>
      ) : (
        console.log(`This type (${type}) is not valid.`)
      )}
    </div>
  );
};

export default Caption;
