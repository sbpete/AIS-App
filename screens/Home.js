import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import NavigationCard from '../componets/NavigationCard';
// styling
import { colors } from '../styles';

// Home screen
const Home = ({ navigation }) => {

  // Sample Data
  const itemData = [
    {
      iconName: 'file',
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
      iconName: 'user',
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
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text='Home' iconName='home' iconType='feather' />
      <View style={styles.containerView}> 
        <FlatList
          data={itemData}
          numColumns={2}
          renderItem={() => <NavigationCard text={item.text} iconName={item.iconName} iconType={item.iconType} navigation={navigation} />}
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
    backgroundColor: colors.gray,
  },
  containerView: {
    padding: 10,
    paddingTop: 0,
    margin: 10,
    backgroundColor: colors.lightBlue,
  },
});

export default Home;