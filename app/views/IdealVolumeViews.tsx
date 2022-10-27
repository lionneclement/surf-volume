import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {StyleSheet} from 'react-native';
import ShapesSlider from '../components/sliders/ShapesSliders';
import SizeSlider from '../components/sliders/SizeSliders';
import {skillRange} from '../data/range/SkillRangeData';
import {weightRange} from '../data/range/WeighRangeData';
import DividerUI from '../ui/DividerUI';
import SafeAreaViewUI from '../ui/SafeAreaViewUI';
import ScrollViewUI from '../ui/ScrollViewUI';
import TextUI from '../ui/TextUI';
import TitleUI from '../ui/TitleUI';
import {idealVolumeCalculator} from '../utils/VolumeCalculator';

// Find Ideal Volume https://www.firewiresurfboards.com/pages/surfboard-volume-calculator
const IdealVolume: FunctionComponent = (): ReactElement => {
  const weightMiddleValue: number = Math.floor(weightRange.length / 2);
  const skillLevelMiddleValue: number = Math.floor(skillRange.length / 2);
  const [weight, setWeight] = useState<number>(weightMiddleValue);
  const [skillLevel, setSkillLevel] = useState<number>(skillLevelMiddleValue);
  const [idealVolume, setIdealVolume] = useState<number>(0);

  useEffect(() => {
    setIdealVolume(
      idealVolumeCalculator({
        weight: weightRange[weight].value,
        skillLevel: skillRange[skillLevel],
      }),
    );
  }, [weight, skillLevel]);

  return (
    <SafeAreaViewUI>
      <ScrollViewUI>
        <TitleUI>Ideal Volume Calculator</TitleUI>
        <TextUI style={styles.description}>
          Calculate your board volume based on your surfer profile.
        </TextUI>
        <SizeSlider
          title="Weight (kg | pounds)"
          range={weightRange}
          value={weight}
          setValue={setWeight}
        />
        <ShapesSlider
          range={skillRange}
          value={skillLevel}
          setValue={setSkillLevel}
        />
        <DividerUI />
        <TextUI style={styles.volume}>{idealVolume}L</TextUI>
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
  description: {
    fontFamily: 'Jost-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default IdealVolume;
