import React from "react";

const DoubleLIneBox = ({ contents, style, even = false }) => {
  return (
    <div className={`doubleLineBox ${even && `even`}`} style={style}>
      {contents.map(({ key, value }, i) => {
        return (
          <span key={`doubleLine-item${i}`}>
            {key} <span className="boldUpper">{value}</span>
          </span>
        );
      })}
    </div>
  );
};

export default DoubleLIneBox;
