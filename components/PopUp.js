import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
//  my components
import MyButton from '../components/MyButton';
// linking
import { openURL } from 'expo-linking';
// styling
import { colors } from '../styles';

// Pop UpS
const PopUp = ({ message, phone, link, toggle, visible }) => {
  return (
      <Overlay overlayStyle={styles.popUp} isVisible={visible} onBackdropPress={toggle}>
        {message && <Text style={styles.popUpText}>{message}</Text>}
        {phone && <MyButton text='Call' onPress={() => openURL(`tel:${phone}`)} />}
        <View style={{marginBottom: 20}} />
        {link && <MyButton text='Log in' onPress={() => openURL(link)} />}
        <View style={{marginBottom: 20}} />
      </Overlay>
  );
}

const styles = StyleSheet.create({
  popUp: {
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  popUpText: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PopUp;