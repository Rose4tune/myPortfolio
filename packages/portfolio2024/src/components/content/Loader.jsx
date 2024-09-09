import { Html } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { IsEnteredAtom } from "../../stores";
import styled from "styled-components";

export default function Loader() {
  const [isEntered, setIsEntered] = useRecoilState(IsEnteredAtom);

  if (isEntered) return null;
  console.log("loader");
  return (
    <Html center>
      <EnterBtn onClick={() => setIsEntered(true)}>Enter</EnterBtn>
    </Html>
  );
}

const EnterBtn = styled.div`
  display: block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  &:hover {
    background-color: #fff;
    color: #dc4f00;
  }
`;
