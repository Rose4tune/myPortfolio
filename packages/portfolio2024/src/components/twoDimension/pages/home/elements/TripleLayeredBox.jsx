import React from "react";
import styled from "styled-components";

function TripleLayeredBox({ contents, style, redText = false }) {
  const styles = {
    ...style,
    color: redText ? "hsl(var(--red-fore-030))" : "inherit",
  };
  
  return (
    <Wrap style={styles}>
      <Overlap className="tripleLayered">{contents}</Overlap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Overlap = styled.p`
  padding: 2rem 4rem;
`;

export default TripleLayeredBox;
