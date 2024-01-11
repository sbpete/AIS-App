import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import MyButton from '../components/MyButton';
import FadeInView from '../components/FadeInView';
// linking
import { openURL } from 'expo-linking';
// data
import { employees } from '../macros';
// styling
import { colors } from '../styles';

// Contact Us screen
const ContactUs = ({ navigation }) => {

  return (
    <FadeInView style={styles.container} navigation={navigation}>
      <Header navigation={navigation}/>
      <Heading text='Contact Us' iconName='phone' iconType='feather' navigation={navigation}/>
      <ScrollView style={styles.scrollStyle}>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text style={styles.title}>Office</Text>
          <MyButton text='Call' onPress={() => openURL('tel:706-226-0186')} />
          <Text style={styles.text}>706-226-0186</Text>
          <MyButton text='Email' onPress={() => openURL('mailto:info@ais-ins.net')} />
          <Text style={styles.text}>info@ais-ins.net</Text>
          <MyButton text='After Hours' onPress={() => openURL('tel:706-450-6460')} />
          <Text style={styles.text}>706-450-6460</Text>
        </View>
        {
          employees.map(employee => (
            <View key={employee.name} style={styles.contactContainer}>
              <View style={styles.separator} />
              <Text style={styles.title}>{employee.name}</Text>
              <Text style={styles.text}>{employee.title}</Text>
              <MyButton text='Call' onPress={() => openURL('tel:' + employee.phone)} />
              <Text style={styles.text}>{employee.phone}</Text>
              <MyButton text='Email' onPress={() => openURL('mailto:' + employee.email)} />
              <Text style={styles.text}>{employee.email}</Text>
            </View>
          ))
        }
      </ScrollView>
    </FadeInView>
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
    margin: 15,
  },
});

export default ContactUs;