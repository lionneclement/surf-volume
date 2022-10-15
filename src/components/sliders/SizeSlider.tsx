import Slider from '@react-native-community/slider';
import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import {SizeRange} from '../../types/SizeRangeTypes';
import TextUI from '../../ui/TextUI';
import {surfboardSliderStyles as styles} from './SurfboardSliderStyles';

interface Props {
  title: string;
  sizeRange: SizeRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const SizeSlider = ({title, sizeRange, value, setValue}: Props) => {
  return (
    <View style={globalStyles.marginTop15}>
      <TextUI style={styles.title}>{title}</TextUI>
      <View style={styles.sizeContainer}>
        <TextUI style={styles.minMaxSize}>{sizeRange[0].feetInches}</TextUI>
        <TextUI style={styles.currentSize}>
          {sizeRange[value].feetInches}
        </TextUI>
        <TextUI style={styles.minMaxSize}>
          {sizeRange[sizeRange.length - 1].feetInches}
        </TextUI>
      </View>
      <Slider
        tapToSeek
        value={value}
        step={1}
        style={styles.slider}
        onValueChange={setValue}
        minimumValue={0}
        maximumValue={sizeRange.length - 1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default SizeSlider;
