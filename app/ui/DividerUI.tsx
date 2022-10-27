import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';

const DividerUI: FunctionComponent = (): ReactElement => {
  return <Divider style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    marginVertical: 20,
    width: 300,
    height: 1,
  },
});

export default DividerUI;
