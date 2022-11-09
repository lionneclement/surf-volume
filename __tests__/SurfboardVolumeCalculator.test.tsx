import 'react-native';
import {surfboardVolumeCalculator} from '../app/utils/VolumeCalculator';

describe('Should calculate the volume of a surfboard', () => {
  it('Shortboard', () => {
    expect(
      surfboardVolumeCalculator({
        length: 175.26,
        width: 50.1,
        thickness: 6.3,
        shapeValue: 0.54,
      }),
    ).toBe(29.9);
  });

  it('Hybrid/Fish', () => {
    expect(
      surfboardVolumeCalculator({
        length: 175.26,
        width: 53.9,
        thickness: 6.9,
        shapeValue: 0.56,
      }),
    ).toBe(36.5);
  });

  it('Funboard/Mal', () => {
    expect(
      surfboardVolumeCalculator({
        length: 279.4,
        width: 59.7,
        thickness: 9.5,
        shapeValue: 0.58,
      }),
    ).toBe(91.9);
  });
});
