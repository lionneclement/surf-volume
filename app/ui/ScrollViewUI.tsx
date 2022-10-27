import React, {FunctionComponent, ReactElement, ReactNode} from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';

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
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}>
      {children}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default ScrollViewUI;
