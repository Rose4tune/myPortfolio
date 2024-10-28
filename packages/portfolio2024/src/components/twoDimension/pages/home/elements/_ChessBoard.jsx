import React from "react";

const ChessBoard = () => {
  return (
    <Wrap className="frameShadow_left">
      <Caption type="code" />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 42vw;
  height: 36.5vw;
  margin-bottom: 13vh;
  background: hsl(var(--gray-back-100));
  border: 1px solid hsl(var(--pink-back-070));

  .caption {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
  }
`;

export default ChessBoard;
