import React, {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../styles/Styles';
import SliderUI from '../../ui/SliderUI';
import TextUI from '../../ui/TextUI';

export interface SliderRange {
  label: string;
  value: number;
}

interface Props {
  title?: string;
  displayCurrentValue?: boolean;
  displayMiddleValue?: boolean;
  displayMaxValue?: boolean;
  displayMinValue?: boolean;
  range: SliderRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const SliderComponent: FunctionComponent<Props> = ({
  title,
  displayCurrentValue = true,
  displayMiddleValue = true,
  displayMaxValue = true,
  displayMinValue = true,
  range,
  value,
  setValue,
}: Props): ReactElement => {
  return (
    <View style={globalStyles.marginTop15}>
      {title && <TextUI style={styles.title}>{title}</TextUI>}
      <View style={styles.textContainer}>
        {displayMinValue && (
          <TextUI style={styles.minMaxSize}>{range[0].label}</TextUI>
        )}
        {displayCurrentValue && (
          <TextUI style={styles.currentSize}>{range[value].label}</TextUI>
        )}
        {displayMaxValue && (
          <TextUI style={styles.minMaxSize}>
            {range[range.length - 1].label}
          </TextUI>
        )}
      </View>
      <SliderUI
        value={value}
        onValueChange={setValue}
        maximumValue={range.length - 1}
      />
      {displayMiddleValue && (
        <TextUI style={[styles.minMaxSize, globalStyles.textAlignCenter]}>
          {range[2].label}
        </TextUI>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Jost-Bold',
    fontSize: 21,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minMaxSize: {
    fontSize: 18,
  },
  currentSize: {
    flex: 1,
    fontSize: 26,
    fontFamily: 'Jost-Medium',
    textAlign: 'center',
  },
});

export default SliderComponent;
