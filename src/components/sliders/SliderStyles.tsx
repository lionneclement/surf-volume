import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const sliderStyles: {[key: string]: ViewStyle | TextStyle} =
  StyleSheet.create({
    title: {
      fontFamily: 'Jost-Bold',
      fontSize: 21,
    },
    textContainer: {
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
