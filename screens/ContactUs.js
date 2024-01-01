import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import MyButton from '../components/MyButton';
// linking
import { openURL } from 'expo-linking';
// data
import { employees } from '../macros';
// styling
import { colors } from '../styles';

// Contact Us screen
const ContactUs = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text='Contact Us' iconName='phone' iconType='feather' />
      <ScrollView style={styles.scrollStyle}>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text style={styles.title}>Business</Text>
          <MyButton text='706-226-0186' onPress={() => openURL('tel:706-226-0186')} />
          <Pressable
            style={styles.itemContainer}
            onPress={() => openURL('mailto:info@ais-ins.net')}
          >
            <Text style={styles.itemText}>Email</Text>
          </Pressable>
        </View>
        {
          employees.map(employee => (
            <View key={employee.name} style={styles.contactContainer}>
              <View style={styles.separator} />
              <Text style={styles.title}>{employee.name}</Text>
              <Text style={styles.text}>{employee.title}</Text>
              <Pressable
                style={styles.itemContainer}
                onPress={openURL(employee.phone)}
              >
                <Text style={styles.itemText}>Call</Text>
              </Pressable>
              <Pressable
                style={styles.itemContainer}
                onPress={openURL(employee.phone)}
              >
                <Text style={styles.itemText}>Email</Text>
              </Pressable>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.gray,
  },
  scrollStyle: {
    backgroundColor: colors.lightBlue, 
    margin: 20, 
    marginBottom: 40, 
    marginTop: 0,
    borderRadius: 20
  },
  contactContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    margin: 30, 
    backgroundColor: colors.darkGray, 
    height: 1, 
    width: '80%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

export default ContactUs;