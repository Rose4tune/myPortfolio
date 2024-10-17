import React from "react";

const DoubleLineBox = ({ contents, style, even = false }) => {
  return (
    <div className={`doubleLine ${even ? `even` : ""}`} style={style}>
      {contents.map(({ key, value, isActive }, i) => {
        return (
          <div
            key={`doubleLine-item${i}`}
            className={`doubleLine-item${isActive ? " active" : ""}`}
          >
            {key} <span className="boldUpper">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DoubleLineBox;
