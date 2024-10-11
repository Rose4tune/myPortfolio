import React from "react";

const DoubleLIneBox = ({ list, style, even = false }) => {
  return (
    <div className={`doubleLineBox ${even && `even`}`} style={style}>
      {list.map(({ key, value }, i) => {
        return (
          <span key={`doubleLine-item${i}`}>
            {key} <span className="boldUpper">{value}</span>
            {"\n"}
          </span>
        );
      })}
    </div>
  );
};

export default DoubleLIneBox;
