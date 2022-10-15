import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const globalStyles: {[key: string]: ViewStyle | TextStyle} =
  StyleSheet.create({
    marginTop15: {
      marginTop: 15,
    },
    marginTop20: {
      marginTop: 20,
    },
    textAlignCenter: {
      textAlign: 'center',
    },
  });
