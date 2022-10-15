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
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default ScrollViewUI;
