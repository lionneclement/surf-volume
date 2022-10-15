import {ReactNode} from 'react';
import React, {StyleSheet, TextProps} from 'react-native';
import TextUI from './TextUI';

interface Props extends TextProps {
  children: ReactNode;
}

const TitleUI = ({children, ...props}: Props) => {
  return (
    <TextUI style={styles.title} {...props}>
      {children}
    </TextUI>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Jost-Medium',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 40,
  },
});

export default TitleUI;
