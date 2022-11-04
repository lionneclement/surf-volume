import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {Divider, DividerProps} from 'react-native-paper';

const DividerUI: FunctionComponent<DividerProps> = ({
  style,
  ...props
}: DividerProps): ReactElement => {
  return <Divider style={[styles.line, style]} {...props} />;
};

const styles = StyleSheet.create({
  line: {
    marginVertical: 20,
    width: 300,
    height: 1,
    alignSelf: 'center',
  },
});

export default DividerUI;
