import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';

interface Props extends ScrollViewProps {
  children: ReactNode;
}

const ScrollViewUI = ({children, ...props}: Props) => {
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={styles.container}
      {...props}>
      {children}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default ScrollViewUI;
