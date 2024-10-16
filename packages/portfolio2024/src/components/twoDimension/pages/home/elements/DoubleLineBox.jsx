import React from "react";

const DoubleLineBox = ({ contents, style, even = false }) => {
  return (
    <div className={`doubleLineBox ${even && `even`}`} style={style}>
      {contents.map(({ key, value }, i) => {
        return (
          <div key={`doubleLine-item${i}`}>
            {key} <span className="boldUpper">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DoubleLineBox;
