import React from "react";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../../stores";
import { captions } from "../../../../../data/captions";

const Caption = ({ type, link, lang }) => {
  const language = useRecoilValue(LanguageAtom);

  const renderCaptionLink = (linkText, isDiv) => {
    return isDiv ? (
      <div className="caption-link">
        <a href={link} target="_blank">
          {linkText}
        </a>
      </div>
    ) : (
      <span className="caption-link">
        <a href={link} target="_blank">
          {linkText}
        </a>
      </span>
    );
  };

  const currentCaption = captions[type];
  const displayLanguage = lang ? lang : language;

  return (
    <div
      className="caption"
      style={type === "more" ? { color: "hsl(var(--red-fore-010))" } : {}}
    >
      {currentCaption ? (
        <>
          {currentCaption.text[displayLanguage]}
          {renderCaptionLink(
            currentCaption.linkText[displayLanguage],
            currentCaption.isDiv
          )}
        </>
      ) : (
        console.log(`This type (${type}) is not valid.`)
      )}
    </div>
  );
};

export default Caption;
