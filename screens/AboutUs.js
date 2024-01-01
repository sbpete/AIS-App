import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// my components
import Header from '../components/Header';
// styling
import colors from '../styles/colors';

// About Us screen
const AboutUs = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <Image
          source={require('../assets/AIS-logo-simple-col.png')}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <Text style={styles.title}>About Us</Text>
        <Text style={{fontSize: 20, margin: 20, textAlign: 'center'}}>
          As a locally owned and operated insurance agency in Dalton, Georgia, Advanced Insurance Strategies is committed to providing quality insurance products for individuals and businesses. We combine our strong insurance background and product knowledge to assist both current and future clients manage and plan for all types of potential risk.{`\n`}{`\n`}
          Our team of knowledgeable insurance professionals is experienced in creating personal and commercial insurance policies designed to fit your needs. With Advanced Insurance Strategies, our friendly staff will work with you on a one-on-one basis to develop not only the perfect policy, but a lasting relationship.{`\n`}{`\n`}
          When you work with Advanced Insurance Strategies, you’ll experience the quality service and attention to detail that you can only find with an independent insurance agency.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  scrollStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoStyle: {
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default AboutUs;