import React from "react";

const Caption = ({ type }) => {
  const captions = {
    resume: {
      text: "I Want To Stick To The Basics",
      linkText: "MY RESUME IS HERE",
      isDiv: true,
    },
    study: {
      text: "I Want To Enjoy The Growth Of Knowledge",
      linkText: "MY STUDY IS HERE",
      isDiv: true,
    },
    code: {
      text: "I Want To Record Everything Meticulously",
      linkText: "MY CODE IS HERE",
      isDiv: true,
    },
    more: {
      text: "Are You",
      linkText: "MORE CURIOUS ABOUT THIS?",
      isDiv: false,
    },
    email: {
      text: "If You Want To Talk To Me,",
      linkText: "SEND ME AN EMAIL",
      isDiv: false,
    },
    git: {
      text: "Curious About My Code,",
      linkText: "GO GITHUB",
      isDiv: false,
    },
    blog: {
      text: "Want To Know What I Study,",
      linkText: "GO BLOG",
      isDiv: false,
    },
  };

  const renderCaptionLink = (linkText, isDiv) => {
    return isDiv ? (
      <div className="caption-link">{linkText}</div>
    ) : (
      <span className="caption-link">{linkText}</span>
    );
  };

  const currentCaption = captions[type];

  return (
    <div
      className="caption"
      style={type === "more" ? { color: "hsl(var(--red-fore-010))" } : {}}
    >
      {currentCaption ? (
        <>
          {currentCaption.text}
          {renderCaptionLink(currentCaption.linkText, currentCaption.isDiv)}
        </>
      ) : (
        console.log(`This type (${type}) is not valid.`)
      )}
    </div>
  );
};

export default Caption;
