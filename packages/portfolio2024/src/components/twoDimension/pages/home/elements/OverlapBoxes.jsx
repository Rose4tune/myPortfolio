import React from "react";
import styled from "styled-components";

function OverlapBoxes({ style, children }) {
  return (
    <Wrap style={style}>
      <Overlap className="overlapBoxes">{children}</Overlap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  transform: translateX(-50%);
`;

const Overlap = styled.div`
  padding: 2rem 4rem;
`;

export default OverlapBoxes;
