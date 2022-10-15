import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ShapesSlider from '../components/sliders/ShapesSlider';
import SizeSlider from '../components/sliders/SizeSlider';
import {lengthRange} from '../data/LengthRangeData';
import {shapesRange} from '../data/ShapesRangeData';
import {thicknessRange} from '../data/ThicknessRangeData';
import {widthRange} from '../data/WidthRangeData';
import {globalStyles} from '../styles/Styles';
import ScrollViewUI from '../ui/ScrollViewUI';
import TextUI from '../ui/TextUI';
import TitleUI from '../ui/TitleUI';

const Home = () => {
  const [length, setLength] = useState<number>(
    Math.floor(lengthRange.length / 2),
  );
  const [width, setWidth] = useState<number>(Math.floor(widthRange.length / 2));
  const [thickness, setThickness] = useState<number>(
    Math.floor(thicknessRange.length / 2),
  );
  const [shape, setShape] = useState<number>(
    Math.floor(shapesRange.length / 2),
  );
  const [volume, setVolume] = useState<string>('');

  useEffect(() => {
    const dimensions =
      lengthRange[length].cm *
      widthRange[width].cm *
      thicknessRange[thickness].cm;

    const newVolume = (dimensions * shapesRange[shape].value) / 1000;
    setVolume(newVolume.toFixed(1));
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
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}
        />
        <TextUI style={[styles.liters, globalStyles.marginTop15]}>
          {volume} LITERS
        </TextUI>
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
});

export default Home;
