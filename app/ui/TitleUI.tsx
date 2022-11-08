import {FunctionComponent, ReactElement, ReactNode} from 'react';
import React, {StyleSheet, TextProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
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
    fontSize: 29,
    textAlign: 'center',
    lineHeight: RFValue(35),
  },
});

export default TitleUI;
