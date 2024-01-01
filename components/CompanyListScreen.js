import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// my components
import CompanyList from '../components/CompanyList';
import Header from '../components/Header';
import Heading from './Heading';
// styling
import { colors } from '../styles';

// Compaines screen
const CompanyListScreen = ({ message, icon, iconType, typeOfData, defaultTitle, navigation }) => {

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text={message} iconName={icon} iconType={iconType} />
      <View style={styles.listBox}>
        <CompanyList typeOfData={typeOfData} defaultTitle={defaultTitle} />
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
  listBox: {
    height: '72%', 
    alignItems: 'center',
  },
});

export default CompanyListScreen;