import Slider from '@react-native-community/slider';
import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SurfboardSizeRange} from '../types/SurfboardSizeRange';

interface Props {
  title: string;
  sizeRange: SurfboardSizeRange[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const SurfboardSizeSlider = ({
  title,
  sizeRange,
  value,
  setValue,
}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <View>
        <Text>{sizeRange[0].feetInches}</Text>
        <Text>{sizeRange[value].feetInches}</Text>
        <Text>{sizeRange[sizeRange.length - 1].feetInches}</Text>
      </View>
      <Slider
        step={1}
        style={styles.slider}
        onValueChange={setValue}
        minimumValue={0}
        maximumValue={sizeRange.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 10,
  },
});
