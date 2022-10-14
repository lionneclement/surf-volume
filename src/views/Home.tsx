import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {SurfboardShapeSlider} from '../components/SurfboardShapesSlider';
import {SurfboardSizeSlider} from '../components/SurfboardSizeSlider';
import {surfboardLengthRange} from '../data/SurfboardLengthRange';
import {surfboardShapesRange} from '../data/SurfboardShapesRange';
import {surfboardThicknessRange} from '../data/SurfboardThicknessRange';
import {surfboardWidthRange} from '../data/SurfboardWidthRange';

const Home = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [thickness, setThickness] = useState<number>(0);
  const [shape, setShape] = useState<number>(0);
  const [volume, setVolume] = useState<string>('');

  useEffect(() => {
    const dimensions =
      surfboardLengthRange[length].cm *
      surfboardWidthRange[width].cm *
      surfboardThicknessRange[thickness].cm;

    const newVolume = (dimensions * surfboardShapesRange[shape].value) / 1000;
    setVolume(newVolume.toFixed(1));
  }, [length, width, thickness, shape]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Surfboard Volume Calculator</Text>
        <View>
          <SurfboardSizeSlider
            title="Length"
            sizeRange={surfboardLengthRange}
            value={length}
            setValue={setLength}
          />
          <SurfboardSizeSlider
            title="Width"
            sizeRange={surfboardWidthRange}
            value={width}
            setValue={setWidth}
          />
          <SurfboardSizeSlider
            title="Thickness"
            sizeRange={surfboardThicknessRange}
            value={thickness}
            setValue={setThickness}
          />
          <SurfboardShapeSlider
            shapeRange={surfboardShapesRange}
            setValue={setShape}
          />
        </View>
        <Text>{volume} LITERS</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
