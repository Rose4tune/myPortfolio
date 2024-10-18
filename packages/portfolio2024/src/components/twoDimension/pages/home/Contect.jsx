import { forwardRef } from "react";
import styled from "styled-components";

const Contect = forwardRef((props, ref) => {
  return <Section ref={ref}>Contect</Section>;
});

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    hsl(var(--pink-back-080)) 0%,
    hsl(var(--gray-back-100)) 100%
  ), url(/images/contact-bg.png) no-repeat center center;
  background-size: cover;
  background-blend-mode: hard-light;
`;

export default Contect;
