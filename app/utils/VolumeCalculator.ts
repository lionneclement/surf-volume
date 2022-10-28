import {SkillRange} from '../data/range/SkillRangeData';
import {WeightRange} from '../data/range/WeighRangeData';

interface Props {
  length: number;
  width: number;
  thickness: number;
  shapeValue: number;
}

// Surfboard Volume Size Calculator https://nulltuul.com/surfboard-volume-calculator/
export const surfboardVolumeCalculator: ({
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

export const idealVolumeCalculator: ({
  weight,
  skillLevel,
}: {
  weight: WeightRange;
  skillLevel: SkillRange;
}) => number = ({
  weight,
  skillLevel,
}: {
  weight: WeightRange;
  skillLevel: SkillRange;
}): number => {
  // https://rustysurfboards.com/pages/volume-calculator - Ideal Volume Calculator
  const idealVolume: number =
    weight.value * weight.multiple * (skillLevel.pourcentage / 100 + 1);

  return Math.round(idealVolume * 10) / 10;
};
