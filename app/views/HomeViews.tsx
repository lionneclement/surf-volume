import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import SliderComponent from '../components/sliders/SliderComponent';
import {lengthRange} from '../data/range/LengthRangeData';
import {shapesRange} from '../data/range/ShapesRangeData';
import {thicknessRange} from '../data/range/ThicknessRangeData';
import {widthRange} from '../data/range/WidthRangeData';
import DividerUI from '../ui/DividerUI';
import SafeAreaViewUI from '../ui/SafeAreaViewUI';
import ScrollViewUI from '../ui/ScrollViewUI';
import TextUI from '../ui/TextUI';
import TitleUI from '../ui/TitleUI';
import {surfboardVolumeCalculator} from '../utils/VolumeCalculator';

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
    const newVolume: number = surfboardVolumeCalculator({
      length: lengthRange[length].value,
      width: widthRange[width].value,
      thickness: thicknessRange[thickness].value,
      shapeValue: shapesRange[shape].value,
    });

    setVolume(newVolume);
  }, [length, width, thickness, shape]);

  return (
    <SafeAreaViewUI>
      <ScrollViewUI>
        <TitleUI>Surfboard Volume Calculator</TitleUI>
        <View>
          <SliderComponent
            displayMiddleValue={false}
            title="Length"
            range={lengthRange}
            value={length}
            setValue={setLength}
          />
          <SliderComponent
            displayMiddleValue={false}
            title="Width"
            range={widthRange}
            value={width}
            setValue={setWidth}
          />
          <SliderComponent
            displayMiddleValue={false}
            title="Thickness"
            range={thicknessRange}
            value={thickness}
            setValue={setThickness}
          />
          <SliderComponent
            range={shapesRange}
            setValue={setShape}
            value={shape}
            displayCurrentValue={false}
          />
        </View>
        <DividerUI />
        <TextUI style={styles.volume}>{volume}L</TextUI>
      </ScrollViewUI>
    </SafeAreaViewUI>
  );
};

const styles = StyleSheet.create({
  volume: {
    fontFamily: 'Jost-Medium',
    fontSize: 27,
    textAlign: 'center',
  },
});

export default Home;
