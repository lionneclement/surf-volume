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
import {SliderRange} from './SizeSliders';
import {sliderStyles as styles} from './SliderStyles';

interface Props {
  range: SliderRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const ShapesSlider: FunctionComponent<Props> = ({
  range,
  value,
  setValue,
}: Props): ReactElement => {
  return (
    <View style={globalStyles.marginTop20}>
      <View style={styles.textContainer}>
        <TextUI style={styles.minMaxSize}>{range[0].label}</TextUI>
        <TextUI style={styles.minMaxSize}>{range[4].label}</TextUI>
      </View>
      <SliderUI
        value={value}
        onValueChange={setValue}
        maximumValue={range.length - 1}
      />
      <TextUI style={[styles.minMaxSize, globalStyles.textAlignCenter]}>
        {range[2].label}
      </TextUI>
    </View>
  );
};

export default ShapesSlider;
