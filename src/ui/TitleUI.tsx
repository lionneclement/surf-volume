import {FunctionComponent, ReactElement, ReactNode} from 'react';
import React, {StyleSheet, TextProps, TextStyle, ViewStyle} from 'react-native';
import TextUI from './TextUI';

interface Props extends TextProps {
  children: ReactNode;
}

const TitleUI: FunctionComponent<Props> = ({
  children,
  ...props
}: Props): ReactElement => {
  return (
    <TextUI style={styles.title} {...props}>
      {children}
    </TextUI>
  );
};

const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create({
  title: {
    fontFamily: 'Jost-Medium',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 40,
  },
});

export default TitleUI;
