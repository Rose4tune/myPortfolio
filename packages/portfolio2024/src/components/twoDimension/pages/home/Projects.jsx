import { forwardRef } from "react";
import styled from "styled-components";

const Projects = forwardRef((props, ref) => {
  return <Wrap ref={ref}>Projects</Wrap>;
});

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default Projects;
