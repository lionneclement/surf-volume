import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface Props extends TextProps {
  children: ReactNode;
}

const TextUI = ({children, ...props}: Props) => {
  return (
    <Text style={styles.text} {...props}>
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
