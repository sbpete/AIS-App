import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// my components
import CompanyList from '../../components/CompanyList';
import MyButton from '../../components/MyButton';
// data
import { companies } from '../../macros';
// styling
import { colors } from '../../styles';

// Company Select screen
const CompanySelect = ({ route, navigation }) => {

  // Get the claim type from the previous screen
  const { setProgress, claimType } = route.params;

  // go back to the previous screen
  const onBackPress = () => {
      setProgress(0);
      navigation.goBack();
  }

  // Filter the companies based on the supported claim type
  const filteredCompanies = companies.filter(company => company.claimsSupported.includes(claimType));
  const formattedClaimType = claimType.charAt(0).toLowerCase() + claimType.slice(1).replaceAll(" ", "") + 'Data';
  console.log(formattedClaimType);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of claim will you be filing?</Text>
      <View style={styles.listView}>
        <CompanyList filteredCompanies={filteredCompanies} typeOfData={formattedClaimType} defaultTitle='Make a Claim' />
      </View>
      <View style={styles.buttonView}>
        <MyButton text="Back" onPress={onBackPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    padding: 20,
  },
  listView: {
    alignItems: 'center',
    height: '75%',
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    padding: 30,
    top: '83%',
    left: 0,
    right: '58%',
  },
});

export default CompanySelect;