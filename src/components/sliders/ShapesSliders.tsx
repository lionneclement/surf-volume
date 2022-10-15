import React, {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import {ShapeRange} from '../../types/ShapeRangeTypes';
import SliderUI from '../../ui/SliderUI';
import TextUI from '../../ui/TextUI';
import {sliderStyles as styles} from './SliderStyles';

interface Props {
  shapeRange: ShapeRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const ShapesSlider: FunctionComponent<Props> = ({
  shapeRange,
  value,
  setValue,
}: Props): ReactElement => {
  return (
    <View style={globalStyles.marginTop20}>
      <View style={styles.textContainer}>
        <TextUI style={styles.minMaxSize}>{shapeRange[0].name}</TextUI>
        <TextUI style={styles.minMaxSize}>{shapeRange[4].name}</TextUI>
      </View>
      <SliderUI
        value={value}
        onValueChange={setValue}
        maximumValue={shapeRange.length - 1}
      />
      <TextUI style={[styles.minMaxSize, globalStyles.textAlignCenter]}>
        {shapeRange[2].name}
      </TextUI>
    </View>
  );
};

export default ShapesSlider;
