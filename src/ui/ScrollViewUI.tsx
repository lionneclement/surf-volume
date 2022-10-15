import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Props extends ScrollViewProps {
  children: ReactNode;
}

const ScrollViewUI: FunctionComponent<Props> = ({
  children,
  ...props
}: Props): ReactElement => {
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={styles.container}
      {...props}>
      {children}
    </ScrollView>
  );
};

export const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create(
  {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 20,
    },
  },
);

export default ScrollViewUI;
