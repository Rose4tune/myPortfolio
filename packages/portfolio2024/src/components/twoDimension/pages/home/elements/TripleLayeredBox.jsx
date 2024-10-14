import React from "react";
import styled from "styled-components";

function TripleLayeredBox({
  contents,
  position,
  style,
  redText = false,
  classNames = "",
}) {
  classNames =
    classNames !== "" ? `tripleLayered ${classNames}` : "tripleLayered";

  const styles = {
    ...style,
    color: redText ? "hsl(var(--red-fore-030))" : "inherit",
  };

  return (
    <Wrap style={position}>
      <div className={classNames} style={styles}>
        {contents}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export default TripleLayeredBox;
