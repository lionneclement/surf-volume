import 'react-native';
import {skillRange} from '../app/data/range/SkillRangeData';
import {WeightRange, weightRange} from '../app/data/range/WeighRangeData';
import {idealVolumeCalculator} from '../app/utils/VolumeCalculator';

describe('Should calculate your board volume', () => {
  const lightWeightRange = weightRange.filter(
    (weight: WeightRange) => weight.value === 50,
  )[0];
  const heavyWeightRange = weightRange.filter(
    (weight: WeightRange) => weight.value === 100,
  )[0];

  const middleWeightRange = weightRange.filter(
    (weight: WeightRange) => weight.value === 75,
  )[0];

  const beginnerLevel = skillRange[0];
  const intermediateLevel = skillRange[2];
  const advancedLevel = skillRange[4];

  it('Light Beginner', () => {
    expect(
      idealVolumeCalculator({
        weight: lightWeightRange,
        skillLevel: beginnerLevel,
      }),
    ).toBe(39);
  });
  it('Middle Beginner', () => {
    expect(
      idealVolumeCalculator({
        weight: middleWeightRange,
        skillLevel: beginnerLevel,
      }),
    ).toBe(52.5);
  });
  it('Heavy Beginner', () => {
    expect(
      idealVolumeCalculator({
        weight: heavyWeightRange,
        skillLevel: beginnerLevel,
      }),
    ).toBe(72);
  });

  it('Light Intermediate', () => {
    expect(
      idealVolumeCalculator({
        weight: lightWeightRange,
        skillLevel: intermediateLevel,
      }),
    ).toBe(24.4);
  });
  it('Middle Intermediate', () => {
    expect(
      idealVolumeCalculator({
        weight: middleWeightRange,
        skillLevel: intermediateLevel,
      }),
    ).toBe(32.8);
  });
  it('Heavy Intermediate', () => {
    expect(
      idealVolumeCalculator({
        weight: heavyWeightRange,
        skillLevel: intermediateLevel,
      }),
    ).toBe(45);
  });

  it('Light Advance', () => {
    expect(
      idealVolumeCalculator({
        weight: lightWeightRange,
        skillLevel: advancedLevel,
      }),
    ).toBe(19.5);
  });
  it('Middle Advance', () => {
    expect(
      idealVolumeCalculator({
        weight: middleWeightRange,
        skillLevel: advancedLevel,
      }),
    ).toBe(26.3);
  });
  it('Heavy Advance', () => {
    expect(
      idealVolumeCalculator({
        weight: heavyWeightRange,
        skillLevel: advancedLevel,
      }),
    ).toBe(36);
  });
});
