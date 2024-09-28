import { Text3D } from "@react-three/drei";

const fontUrl = "/src/assets/fonts/RammettoOne.json";
const fontStyle = {
  font: fontUrl,
  size: 1,
  height: 1,
  lineHeight: 1,
};

export default function IntroText({ text, distance, repeat }) {
  let repeatedText = [];

  for (let i = 0; i < repeat; i++) {
    repeatedText.push(...text.split(""));
    const gap = Math.round((distance / text.length) * 10);

    for (let j = 0; j < gap; j++) {
      repeatedText.push(" ");
    }
  }

  const angleStep = (Math.PI * 2) / repeatedText.length;

  return repeatedText.map((t, i) => {
    const angle = i * angleStep;

    let x = distance * Math.cos(angle);
    let z = distance * Math.sin(angle);

    return (
      <Text3D
        key={i + "textKey"}
        position={[x, 0, z]}
        rotation-y={Math.PI / -2 - angle}
        {...fontStyle}
      >
        {t}
        <meshNormalMaterial />
      </Text3D>
    );
  });
}
