import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Divider} from 'react-native-paper';
import ShapesSlider from '../components/sliders/ShapesSliders';
import SizeSlider from '../components/sliders/SizeSliders';
import {lengthRange} from '../data/LengthRangeData';
import {shapesRange} from '../data/ShapesRangeData';
import {thicknessRange} from '../data/ThicknessRangeData';
import {widthRange} from '../data/WidthRangeData';
import SafeAreaViewUI from '../ui/SafeAreaViewUI';
import ScrollViewUI from '../ui/ScrollViewUI';
import TextUI from '../ui/TextUI';
import TitleUI from '../ui/TitleUI';
import {volumeCalculator} from '../utils/VolumeCalculator';

// Surfboard Volume Size Calculator https://nulltuul.com/surfboard-volume-calculator/
const Home: FunctionComponent = (): ReactElement => {
  const lengthMiddleValue: number = Math.floor(lengthRange.length / 2);
  const widthMiddleValue: number = Math.floor(widthRange.length / 2);
  const thicknessMiddleValue: number = Math.floor(thicknessRange.length / 2);
  const shapesMiddleValue: number = Math.floor(shapesRange.length / 2);

  const [length, setLength] = useState<number>(lengthMiddleValue);
  const [width, setWidth] = useState<number>(widthMiddleValue);
  const [thickness, setThickness] = useState<number>(thicknessMiddleValue);
  const [shape, setShape] = useState<number>(shapesMiddleValue);
  const [volume, setVolume] = useState<number>(0);

  useEffect(() => {
    const newVolume: number = volumeCalculator({
      length: lengthRange[length].cm,
      width: widthRange[width].cm,
      thickness: thicknessRange[thickness].cm,
      shapeValue: shapesRange[shape].value,
    });

    setVolume(newVolume);
  }, [length, width, thickness, shape]);

  return (
    <SafeAreaViewUI>
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
        <Divider style={styles.line} />
        <TextUI style={styles.liters}>{volume} LITERS</TextUI>
      </ScrollViewUI>
    </SafeAreaViewUI>
  );
};

const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create({
  liters: {
    fontFamily: 'Jost-Medium',
    fontSize: 27,
    textAlign: 'center',
  },
  line: {
    marginVertical: 20,
    width: 300,
    height: 1,
  },
});

export default Home;