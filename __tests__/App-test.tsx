/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {volumeCalculator} from '../src/utils/VolumeCalculator';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('Should calculate the volume of a surfboard', () => {
  it('Shortboard', () => {
    expect(
      volumeCalculator({
        length: 175.26,
        width: 50.1,
        thickness: 6.3,
        shapeValue: 0.54,
      }),
    ).toBe(29.9);
  });

  it('Hybrid/Fish', () => {
    expect(
      volumeCalculator({
        length: 175.26,
        width: 53.9,
        thickness: 6.9,
        shapeValue: 0.56,
      }),
    ).toBe(36.5);
  });

  it('Funboard/Mal', () => {
    expect(
      volumeCalculator({
        length: 279.4,
        width: 59.7,
        thickness: 9.5,
        shapeValue: 0.58,
      }),
    ).toBe(91.9);
  });
});
