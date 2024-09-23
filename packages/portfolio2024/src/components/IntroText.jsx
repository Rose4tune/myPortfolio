import { Text3D } from "@react-three/drei";

const fontUrl = "/src/assets/fonts/RammettoOne.json";
const fontStyle = {
  font: fontUrl,
  size: 1,
  height: 1,
  lineHeight: 1,
  fontSize: 1.5,
};

export default function IntroText({ text, distance }) {
  const textLen = text.length;
  text = [...text.split(""), ...text.split("").reverse()];

  return text.map((t, i) => {
    const proceed = i < textLen;
    let angle =
      ((proceed ? i : i - textLen) / textLen) * (Math.PI / 1.5) + 0.55;
    let radius = Math.floor(textLen * 0.4);

    let x = distance + radius * Math.sin(angle).toFixed(2) + 5;
    let y = (angle - textLen * 0.1) / 2;
    let z = -(proceed ? textLen / 2 - i : textLen / 2 - i + textLen) * 1.3;

    if (textLen > 20) {
      radius = Math.floor(textLen * 0.95);
      x = distance + radius * Math.sin(angle).toFixed(2) - 15;
      y = angle.toFixed(2) - 1.5;
    }

    if (t === "I" || t === "L" || t === "'") {
      z = z + (proceed ? 0.3 : -0.3);
    } else if (t === "W") {
      z = z + (proceed ? -0.6 : 0.6);
    }

    let rotationY = Math.PI / (proceed ? -2 : 2) + (proceed ? -y : y);

    return (
      <Text3D
        key={i + "textKey"}
        position={[proceed ? x : -x, 0, z]}
        {...fontStyle}
        rotation-y={rotationY}
      >
        {t}
        <meshNormalMaterial />
      </Text3D>
    );
  });
}
