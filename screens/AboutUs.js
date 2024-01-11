import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import FadeInView from '../components/FadeInView';
// styling
import { colors } from '../styles';

// About Us screen
const AboutUs = ({ navigation }) => {

  return (
    <FadeInView style={styles.container} navigation={navigation}>
      <Header navigation={navigation}/>
      <Heading text='About Us' iconName='info' iconType='feather' navigation={navigation}/>
      <View style={{alignItems: 'center', height: '70%'}}>
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollStyle}>
            <View style={styles.logoBox}>
              <Image
                source={require('../assets/AIS-office.jpg')}
                style={styles.logoStyle}
                resizeMode='cover'
              />
            </View>
            <Text style={{fontSize: 20, margin: 20, textAlign: 'center'}}>
              As a locally owned and operated insurance agency in Dalton, Georgia, Advanced Insurance Strategies is committed to providing quality insurance products for individuals and businesses. We combine our strong insurance background and product knowledge to assist both current and future clients manage and plan for all types of potential risk.{`\n`}{`\n`}
              Our team of knowledgeable insurance professionals is experienced in creating personal and commercial insurance policies designed to fit your needs. With Advanced Insurance Strategies, our friendly staff will work with you on a one-on-one basis to develop not only the perfect policy, but a lasting relationship.{`\n`}{`\n`}
              When you work with Advanced Insurance Strategies, you’ll experience the quality service and attention to detail that you can only find with an independent insurance agency.{`\n`}{`\n`}
            </Text>
          </ScrollView>
        </View>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoBox: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: '80%',
    height: 160,
    borderRadius: 20,
  },
  scrollContainer: {
    width: '85%',
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
  },
});

export default AboutUs;