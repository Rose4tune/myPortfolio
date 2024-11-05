import React from "react";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../../stores";
import getData from "../../../../../api/getData";

const Caption = ({ type, link, lang, isBlock = false }) => {
  const language = useRecoilValue(LanguageAtom);
  const captions = getData("captions");

  const renderCaptionLink = (linkText, isBlock) => {
    return (
      <span className={`caption-link${isBlock ? " block" : ""}`}>
        <a href={link} target="_blank">
          {linkText}
        </a>
      </span>
    );
  };

  const currentCaption = captions[type];
  const displayLanguage = lang ? lang : language;

  if (captions.length === 0) return;

  return (
    <div
      className="caption"
      style={type === "more" ? { color: "hsl(var(--red-fore-010))" } : {}}
    >
      {currentCaption ? (
        <>
          {currentCaption.text[displayLanguage]}
          {renderCaptionLink(currentCaption.linkText[displayLanguage], isBlock)}
        </>
      ) : (
        console.log(`This type (${type}) is not valid.`)
      )}
    </div>
  );
};

export default Caption;
