import { forwardRef } from "react";
import styled from "styled-components";

const Contect = forwardRef((props, ref) => {
  return <Wrap ref={ref}>Contect</Wrap>;
});

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default Contect;
