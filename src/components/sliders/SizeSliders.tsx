import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import {SizeRange} from '../../types/SizeRangeTypes';
import SliderUI from '../../ui/SliderUI';
import TextUI from '../../ui/TextUI';
import {sliderStyles as styles} from './SliderStyles';

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
      <View style={styles.textContainer}>
        <TextUI style={styles.minMaxSize}>{sizeRange[0].feetInches}</TextUI>
        <TextUI style={styles.currentSize}>
          {sizeRange[value].feetInches}
        </TextUI>
        <TextUI style={styles.minMaxSize}>
          {sizeRange[sizeRange.length - 1].feetInches}
        </TextUI>
      </View>
      <SliderUI
        value={value}
        onValueChange={setValue}
        maximumValue={sizeRange.length - 1}
      />
    </View>
  );
};

export default SizeSlider;
