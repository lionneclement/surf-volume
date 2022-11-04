import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface Props extends TextProps {
  children: ReactNode;
}

const TextUI: FunctionComponent<Props> = ({
  children,
  style,
  ...props
}: Props): ReactElement => {
  return (
    <Text style={[styles.text, style]} {...props}>
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
