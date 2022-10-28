import React, {FunctionComponent, ReactElement} from 'react';
import {Linking, StyleSheet} from 'react-native';
import TextUI from '../ui/TextUI';

interface Props {
  text: string;
  url: string;
}

const CreditComponent: FunctionComponent<Props> = ({
  text,
  url,
}: Props): ReactElement => {
  const onPressCredit = async (): Promise<void> => {
    Linking.openURL(url);
  };

  return (
    <TextUI onPress={onPressCredit} style={styles.credit}>
      {text}
    </TextUI>
  );
};

const styles = StyleSheet.create({
  credit: {
    marginTop: 10,
    fontFamily: 'Jost-Medium',
    fontSize: 12,
  },
});

export default CreditComponent;
