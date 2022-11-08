import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props extends TextProps {
  children: ReactNode;
}

const TextUI: FunctionComponent<Props> = ({
  children,
  style,
  ...props
}: Props): ReactElement => {
  const fontSize = StyleSheet.flatten(style)?.fontSize || 12;

  return (
    <Text
      style={[styles.text, style, {fontSize: RFValue(fontSize)}]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Jost-Regular',
    color: 'black',
  },
});

export default TextUI;
