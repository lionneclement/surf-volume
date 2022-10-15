import Slider, {SliderProps} from '@react-native-community/slider';
import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const trackTintColor: string = '#000000';

const SliderUI: FunctionComponent<SliderProps> = ({
  ...props
}: SliderProps): ReactElement => {
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

const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create({
  slider: {
    width: 300,
    height: 50,
  },
});

export default SliderUI;
