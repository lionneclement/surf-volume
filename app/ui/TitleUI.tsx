import {FunctionComponent, ReactElement, ReactNode} from 'react';
import React, {StyleSheet, TextProps} from 'react-native';
import TextUI from './TextUI';

interface Props extends TextProps {
  children: ReactNode;
}

const TitleUI: FunctionComponent<Props> = ({
  children,
  style,
  ...props
}: Props): ReactElement => {
  return (
    <TextUI style={[styles.title, style]} {...props}>
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
