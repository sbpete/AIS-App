import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
// styling
import { colors } from '../styles';

// Home screen
const Home = ({ navigation }) => {

  const iconSize = 50;

  // Sample Data
  const itemData = [
    {
      icon: <Icon name='file' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Make a Claim',
    },
    {
      icon: <Icon name='credit-card' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Make a Payment',
    },
    {
      icon: <Icon name='user' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Get ID Card',
    },
    {
      icon: <Icon name='log-in' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Login To My Account',
    },
    {
      icon: <Icon name='folder' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Documents',
    },
    {
      icon: <Icon name='phone' type='feather' color={colors.blue} size={iconSize} />,
      text: 'Contact Us',
    },
  ];

  // Item/card component
  const Item = ({ item }) => {
    return (
    <Pressable style={styles.cardStyle} onPress={() => {navigation.navigate(item.text)}}>
      {item.icon}
      <Text style={styles.itemText}>{item.text}</Text>
    </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text='Home' iconName='home' iconType='feather' />
      <View style={styles.containerView}> 
        <FlatList
          data={itemData}
          numColumns={2}
          renderItem={Item}
          keyExtractor={(item) => item.text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.grey,
  },
  containerView: {
    padding: 10,
    paddingTop: 0,
  },
  titleView: {
    alignItems: 'flex-start',
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#363636',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
  },
  cardStyle: {
    justifyContent: 'flex-end',
    alignItems: 'left',
    width: '45%',
    height: 150,
    backgroundColor: colors.white,
    padding: 20,
    margin: 10,
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

export default Home;