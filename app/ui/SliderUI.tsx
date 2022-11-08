import Slider, {SliderProps} from '@react-native-community/slider';
import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PRIMARY_COLOR} from '../styles/Styles';

const SliderUI: FunctionComponent<SliderProps> = ({
  style,
  ...props
}: SliderProps): ReactElement => {
  return (
    <Slider
      tapToSeek
      step={1}
      style={[styles.slider, style]}
      minimumValue={0}
      minimumTrackTintColor={PRIMARY_COLOR}
      maximumTrackTintColor={PRIMARY_COLOR}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
    height: RFValue(34),
    alignSelf: 'center',
  },
});

export default SliderUI;
