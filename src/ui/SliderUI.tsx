import Slider, {SliderProps} from '@react-native-community/slider';
import React from 'react';
import {StyleSheet} from 'react-native';

const trackTintColor = '#000000';

const SliderUI = ({...props}: SliderProps) => {
  return (
    <Slider
      tapToSeek
      step={1}
      style={styles.slider}
      minimumValue={0}
      minimumTrackTintColor={trackTintColor}
      maximumTrackTintColor={trackTintColor}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
    height: 50,
  },
});

export default SliderUI;
