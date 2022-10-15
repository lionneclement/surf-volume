import Slider from '@react-native-community/slider';
import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import {ShapeRange} from '../../types/ShapeRangeTypes';
import TextUI from '../../ui/TextUI';
import {surfboardSliderStyles as styles} from './SurfboardSliderStyles';

interface Props {
  shapeRange: ShapeRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const ShapesSlider = ({shapeRange, value, setValue}: Props) => {
  return (
    <View style={globalStyles.marginTop20}>
      <View style={styles.sizeContainer}>
        <TextUI style={styles.minMaxSize}>{shapeRange[0].name}</TextUI>
        <TextUI style={styles.minMaxSize}>{shapeRange[4].name}</TextUI>
      </View>
      <Slider
        tapToSeek
        value={value}
        step={1}
        style={styles.slider}
        onValueChange={setValue}
        minimumValue={0}
        maximumValue={shapeRange.length - 1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />
      <TextUI style={[styles.minMaxSize, globalStyles.textAlignCenter]}>
        {shapeRange[2].name}
      </TextUI>
    </View>
  );
};

export default ShapesSlider;
