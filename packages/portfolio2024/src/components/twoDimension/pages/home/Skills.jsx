import React from "react";
import styled from "styled-components";

export default function Skills({ id, classNames }) {
  return (
    <Wrap id={id} className={{ classNames }}>
      Skills
    </Wrap>
  );
}
const Wrap = styled.section`
  width: 100vw;
  height: 200vh;
`;
