import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import TextUI from './TextUI';

interface Props extends PickerSelectProps {
  containerStyle?: ViewStyle | ViewStyle[];
  title: string;
  items: {label: string; value: number}[];
}

const PickerUi: FunctionComponent<Props> = ({
  containerStyle,
  items,
  title,

  ...props
}: Props) => {
  return (
    <View style={containerStyle}>
      <TextUI style={styles.title}>{title}</TextUI>
      <RNPickerSelect
        style={{inputIOS: styles.picker}}
        items={items}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    fontSize: 20,
    color: 'black',
  },
  title: {
    fontSize: 20,
  },
});

export default PickerUi;