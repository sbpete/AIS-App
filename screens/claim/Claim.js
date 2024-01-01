import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
// my components
import ClaimSelect from './ClaimSelect';
import CompanySelect from './CompanySelect';
import Header from '../../components/Header';
import Heading from "../../components/Heading";
// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// progress bar
import * as Progress from 'react-native-progress';
// styling
import { colors } from '../../styles';

const Claim = ({ navigation }) => {

  // state variable to store the progress of the claim
  const [progress, setProgress] = useState(0);

  // Stack navigator for the claim process
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text='Make a Claim' iconName='file' iconType='feather' />
      {<View style={{paddingHorizontal: 20}}>
        <Progress.Bar progress={progress} width={null} borderWidth={0}/>
      </View>}
      <Stack.Navigator initialRouteName="Claim Select" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Claim Select" component={ClaimSelect} initialParams={{setProgress: setProgress}}/>
        <Stack.Screen name="Company Select" component={CompanySelect} initialParams={{setProgress: setProgress}}/>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default Claim;