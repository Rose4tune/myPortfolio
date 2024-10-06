import React, { forwardRef } from "react";
import styled from "styled-components";

const Skills = forwardRef((props, ref) => {
  return <Wrap ref={ref}>Skills</Wrap>;
});
const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default Skills;
