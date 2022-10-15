import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ShapesSlider from '../components/sliders/ShapesSliders';
import SizeSlider from '../components/sliders/SizeSliders';
import {lengthRange} from '../data/LengthRangeData';
import {shapesRange} from '../data/ShapesRangeData';
import {thicknessRange} from '../data/ThicknessRangeData';
import {widthRange} from '../data/WidthRangeData';
import ScrollViewUI from '../ui/ScrollViewUI';
import TextUI from '../ui/TextUI';
import TitleUI from '../ui/TitleUI';
import {volumeCalculator} from '../utils/VolumeCalculator';

const Home = () => {
  const lengthMiddleValue = Math.floor(lengthRange.length / 2);
  const widthMiddleValue = Math.floor(widthRange.length / 2);
  const thicknessMiddleValue = Math.floor(thicknessRange.length / 2);
  const shapesMiddleValue = Math.floor(shapesRange.length / 2);

  const [length, setLength] = useState<number>(lengthMiddleValue);
  const [width, setWidth] = useState<number>(widthMiddleValue);
  const [thickness, setThickness] = useState<number>(thicknessMiddleValue);
  const [shape, setShape] = useState<number>(shapesMiddleValue);
  const [volume, setVolume] = useState<number>(0);

  useEffect(() => {
    const newVolume = volumeCalculator({
      length: lengthRange[length].cm,
      width: widthRange[width].cm,
      thickness: thicknessRange[thickness].cm,
      shapeValue: shapesRange[shape].value,
    });

    setVolume(newVolume);
  }, [length, width, thickness, shape]);

  return (
    <SafeAreaView>
      <ScrollViewUI>
        <TitleUI>Surfboard Volume Calculator</TitleUI>
        <View>
          <SizeSlider
            title="Length"
            sizeRange={lengthRange}
            value={length}
            setValue={setLength}
          />
          <SizeSlider
            title="Width"
            sizeRange={widthRange}
            value={width}
            setValue={setWidth}
          />
          <SizeSlider
            title="Thickness"
            sizeRange={thicknessRange}
            value={thickness}
            setValue={setThickness}
          />
          <ShapesSlider
            shapeRange={shapesRange}
            setValue={setShape}
            value={shape}
          />
        </View>
        <View style={styles.line} />
        <TextUI style={styles.liters}>{volume} LITERS</TextUI>
      </ScrollViewUI>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  liters: {
    fontFamily: 'Jost-Medium',
    fontSize: 27,
    textAlign: 'center',
  },
  line: {
    marginVertical: 20,
    width: 300,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Home;
