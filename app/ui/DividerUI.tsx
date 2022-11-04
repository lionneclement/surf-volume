import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const DividerUI: FunctionComponent<ViewProps> = ({
  style,
  ...props
}: ViewProps): ReactElement => {
  return <View style={[styles.divider, style]} {...props} />;
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
    width: 300,
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DividerUI;
