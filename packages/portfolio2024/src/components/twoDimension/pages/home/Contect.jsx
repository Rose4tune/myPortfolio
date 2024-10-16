import { forwardRef } from "react";
import styled from "styled-components";

const Contect = forwardRef((props, ref) => {
  return <Section ref={ref}>Contect</Section>;
});

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default Contect;
