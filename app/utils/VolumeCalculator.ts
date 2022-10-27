import {SkillRangeData} from '../data/range/SkillRangeData';

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
  weight: number;
  skillLevel: SkillRangeData;
}) => number = ({
  weight,
  skillLevel,
}: {
  weight: number;
  skillLevel: SkillRangeData;
}): number => {
  // https://rustysurfboards.com/pages/volume-calculator
  const multipleRecommandation: number = 0.35;

  const idealVolume: number =
    weight * multipleRecommandation * (skillLevel.pourcentage / 100 + 1);

  return Math.round(idealVolume * 10) / 10;
};
