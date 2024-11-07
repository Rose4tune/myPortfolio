import React from "react";
import styled from "styled-components";

function TripleLayeredBox({
  contents,
  position,
  style,
  redText = false,
  klassName = "",
}) {
  klassName = klassName !== "" ? `tripleLayered ${klassName}` : "tripleLayered";

  const styles = {
    ...style,
    color: redText ? "hsl(var(--red-fore-030))" : "inherit",
  };

  return (
    <Wrap style={position}>
      <div className={klassName} style={styles}>
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
