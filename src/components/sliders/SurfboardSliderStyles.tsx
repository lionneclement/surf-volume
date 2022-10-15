import {StyleSheet} from 'react-native';

export const surfboardSliderStyles = StyleSheet.create({
  slider: {
    width: 300,
    height: 50,
  },
  title: {
    fontFamily: 'Jost-Bold',
    fontSize: 21,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minMaxSize: {
    fontSize: 18,
  },
  currentSize: {
    fontSize: 26,
    fontFamily: 'Jost-Medium',
  },
});
