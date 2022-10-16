interface Props {
  length: number;
  width: number;
  thickness: number;
  shapeValue: number;
}

// Surfboard Volume Size Calculator https://nulltuul.com/surfboard-volume-calculator/
export const volumeCalculator: ({
  length,
  width,
  thickness,
  shapeValue,
}: Props) => number = ({
  length,
  width,
  thickness,
  shapeValue,
}: Props): number => {
  const dimensions: number = length * width * thickness;

  const volume: number = (dimensions * shapeValue) / 1000;
  return Math.round(volume * 10) / 10;
};
