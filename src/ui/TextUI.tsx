import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet, Text, TextProps, TextStyle, ViewStyle} from 'react-native';

interface Props extends TextProps {
  children: ReactNode;
}

const TextUI: FunctionComponent<Props> = ({
  children,
  ...props
}: Props): ReactElement => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create({
  text: {
    fontFamily: 'Jost-Regular',
    color: 'black',
  },
});

export default TextUI;
