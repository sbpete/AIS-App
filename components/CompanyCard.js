import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
// my components
import MyButton from './MyButton';
// linking
import { openURL } from 'expo-linking';

// Company card with contact info
const CompanyCard = ({ company, data, defaultTitle, setOverlay }) => {

  return (
    <View style={styles.container} key={company.name}>
        <Image 
            source={{uri: company.logo}} 
            style={styles.logoStyle} 
            resizeMode="contain" 
        />
        {
          data.map((item, index) => {
            // If there is a pop up, use it, otherwise go to the link
            const onPress = item.popUp ? 
            () =>  setOverlay(item.data.message, item.data.phone, item.data.link)
            : () => openURL(item.data);

            return (
              <View key={index}>
                <View style={{marginTop: 20}} />
                <MyButton text={item.title ? item.title : defaultTitle} onPress={onPress} />
              </View>
          )})
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoStyle: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
});

export default CompanyCard;