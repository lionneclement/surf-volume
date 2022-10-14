import Slider from '@react-native-community/slider';
import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SurfboardShapeRange} from '../types/SurfboardShapeRange';

interface Props {
  shapeRange: SurfboardShapeRange[];
  setValue: Dispatch<SetStateAction<number>>;
}

export const SurfboardShapeSlider = ({shapeRange, setValue}: Props) => {
  return (
    <View>
      <View>
        <Text>{shapeRange[0].name}</Text>
        <Text>{shapeRange[2].name}</Text>
      </View>
      <Slider
        step={1}
        style={styles.slider}
        onValueChange={setValue}
        minimumValue={0}
        maximumValue={shapeRange.length - 1}
      />
      <Text>{shapeRange[1].name}</Text>
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
