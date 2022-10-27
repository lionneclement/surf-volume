import React, {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import SliderUI from '../../ui/SliderUI';
import TextUI from '../../ui/TextUI';
import {sliderStyles as styles} from './SliderStyles';

export interface SliderRange {
  label: string;
  value: number;
}

interface Props {
  title: string;
  range: SliderRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const SizeSlider: FunctionComponent<Props> = ({
  title,
  range,
  value,
  setValue,
}: Props): ReactElement => {
  return (
    <View style={globalStyles.marginTop15}>
      <TextUI style={styles.title}>{title}</TextUI>
      <View style={styles.textContainer}>
        <TextUI style={styles.minMaxSize}>{range[0].label}</TextUI>
        <TextUI style={styles.currentSize}>{range[value].label}</TextUI>
        <TextUI style={styles.minMaxSize}>
          {range[range.length - 1].label}
        </TextUI>
      </View>
      <SliderUI
        value={value}
        onValueChange={setValue}
        maximumValue={range.length - 1}
      />
    </View>
  );
};

export default SizeSlider;
