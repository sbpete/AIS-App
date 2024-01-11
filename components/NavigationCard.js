import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
// styling
import { colors } from '../styles';

// Item/card component
const NavigationCard = ({ text, iconName, iconType, navigation }) => {

    const [pressed, setPressed] = React.useState(false);

    return (
        <Pressable 
          style={[styles.cardStyle, {backgroundColor: pressed ? colors.gray : colors.white}]} 
          onPress={() => {navigation.navigate(text)}}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
        <Icon name={iconName} type={iconType} color={colors.blue} size={pressed ? 40 : 45} />
        <Text style={[styles.itemText, {fontSize: pressed ? 15 : 16}]}>{text}</Text>
        </Pressable>
    );
  };

  const styles = StyleSheet.create({
    cardStyle: {
      justifyContent: 'flex-end',
      alignItems: 'left',
      width: 140,
      height: 130,
      margin: 10,
      padding: 20,
      borderRadius: 20,
      shadowColor: colors.blue,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
    },
    itemText: {
      fontSize: 20,
      marginTop: 10,
      color: colors.blue,
    }
  });
  
  export default NavigationCard;