import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

interface Props extends SafeAreaViewProps {
  children: ReactNode;
}

const SafeAreaViewUI: FunctionComponent<Props> = ({
  children,
  ...props
}: Props): ReactElement => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'right', 'bottom', 'left']}
      {...props}>
      {children}
    </SafeAreaView>
  );
};

export const styles: {[key: string]: ViewStyle | TextStyle} = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  },
);

export default SafeAreaViewUI;
