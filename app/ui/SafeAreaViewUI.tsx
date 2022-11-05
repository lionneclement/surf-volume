import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

interface Props extends SafeAreaViewProps {
  children: ReactNode;
}

const SafeAreaViewUI: FunctionComponent<Props> = ({
  children,
  style,
  ...props
}: Props): ReactElement => {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={['top', 'right', 'bottom', 'left']}
      {...props}>
      {children}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SafeAreaViewUI;
