import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import NavigationCard from '../components/NavigationCard';
import FadeInView from '../components/FadeInView';
// styling
import { colors } from '../styles';

// Home screen
const Home = ({ navigation }) => {

  // Sample Data
  const itemData = [
    {
      iconName: 'file-text',
      iconType: 'feather',
      text: 'Make a Claim',
    },
    {
      iconName: 'credit-card',
      iconType: 'feather',
      text: 'Make a Payment',
    },
    {
      iconName: 'user',
      iconType: 'feather',
      text: 'Get ID Card',
    },
    {
      iconName: 'log-in',
      iconType: 'feather',
      text: 'Login To My Account',
    },
    {
      iconName: 'folder',
      iconType: 'feather',
      text: 'Documents',
    },
    {
      iconName: 'phone',
      iconType: 'feather',
      text: 'Contact Us',
    },
  ];

  return (
    <FadeInView style={styles.container} navigation={navigation}>
      <Header navigation={navigation}/>
      <Heading text='Home' iconName='home' iconType='feather' navigation={navigation}/> 
      <FadeInView duration={1500} navigation={navigation}>
        <Text style={styles.heading}>Welcome to AIS, how can we help?</Text>
      </FadeInView>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={itemData}
          numColumns={2}
          renderItem={({item}) => <NavigationCard text={item.text} iconName={item.iconName} iconType={item.iconType} navigation={navigation} />}
          keyExtractor={(item) => item.text}
        />
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.gray,
  },
  listContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 20,
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
  flatList: {
    alignItems: 'center',
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    color: colors.darkGray,
    marginLeft: 20,
    marginTop: -10,
  },
});

export default Home;