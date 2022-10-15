interface Props {
  length: number;
  width: number;
  thickness: number;
  shapeValue: number;
}

export const volumeCalculator = ({
  length,
  width,
  thickness,
  shapeValue,
}: Props): number => {
  const dimensions = length * width * thickness;

  const volume = (dimensions * shapeValue) / 1000;
  return Math.round(volume * 10) / 10;
};
