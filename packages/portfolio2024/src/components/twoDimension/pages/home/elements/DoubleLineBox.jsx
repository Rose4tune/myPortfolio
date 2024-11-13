const DoubleLineBox = ({
  contents,
  style,
  even = false,
  children,
  isBold = true,
}) => {
  return (
    <div className={`doubleLine ${even ? `even` : ""}`} style={style}>
      {contents.map(({ key, value, isActive }, i) => {
        return (
          <div
            key={`doubleLine-item${i}`}
            className={`doubleLine-item${isActive ? " active" : ""}`}
          >
            {key} <span className={isBold ? `boldUpper` : ""}>{value}</span>
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default DoubleLineBox;
