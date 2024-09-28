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

  const calRadius = (num) => Math.floor(textLen * num);

  let afterM = 0;
  let countM = 0;

  return text.map((t, i) => {
    const proceed = i < textLen;
    let angle =
      ((proceed ? i : i - textLen) / textLen) * (Math.PI / 1.5) + 0.55;

    let radius = calRadius(0.4);
    let xAdjustment = 5;
    let y = (angle - textLen * 0.1) / 2;
    let z = -(textLen / 2 - i + (proceed ? 0 : textLen)) * 1.3;

    if (textLen > 20) {
      radius = calRadius(0.6);
      xAdjustment = -15;
      y = angle.toFixed(2) - 1.6;
    }

    if (textLen > 40) {
      radius = calRadius(0.8);
    }

    let x = distance + radius * Math.sin(angle).toFixed(2) + xAdjustment;
    let rotationY = Math.PI / (proceed ? -2 : 2) + (proceed ? -y : y);

    if (t === "I" || t === "L" || t === "'") {
      z += proceed ? 0.3 : -0.3;
    } else if (t === "W") {
      z += proceed ? -0.6 : 0.6;
    } else if (t === "M") {
      afterM += 0.6;
      countM += 1;
      z += proceed ? -0.6 : 0;
      x += 0.1;
    }

    z += afterM;

    return (
      <Text3D
        key={i + "textKey"}
        position={[proceed ? x : -x, 0, z]}
        rotation-y={rotationY}
        {...fontStyle}
      >
        {t}
        <meshNormalMaterial />
      </Text3D>
    );
  });
}
