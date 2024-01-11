import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
//  my components
import CompanyCard from '../components/CompanyCard';
import PopUp from '../components/PopUp'
// linking
import { openURL } from 'expo-linking';
// data
import { companies } from '../macros';
// styling
import { colors } from '../styles';

// List of companies component
const CompanyList = ({ filteredCompanies, typeOfData, defaultTitle }) => {

  // overlay visibility
  const [visible, setVisible] = React.useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
  // overlay content
  const [overlay, setOverlay] = React.useState({
    message: "",
    phone: "",
    link: "",
  });
  const changeOverlay = (message, phone, link) => {
    setOverlay({
      message: message, 
      phone: phone, 
      link: link
    });
    toggleOverlay();
  };

  // Sort companies alphabetically and use filtered companies if they exist
  const companiesUsed = filteredCompanies ? filteredCompanies : companies;
  const alphabeticalCompanies = companiesUsed.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      <ScrollView>
      {
        alphabeticalCompanies.map((company, index) => (
          <View>
            <CompanyCard 
              key={company.name} 
              company={company} 
              data={company[typeOfData]}
              defaultTitle={defaultTitle}
              setOverlay={changeOverlay}
            />
            {index != alphabeticalCompanies.length - 1 && <View style={styles.separator} />}
          </View>
        ))
      }
      </ScrollView>
      <PopUp message={overlay.message} phone={overlay.phone} link={overlay.link} toggle={toggleOverlay} visible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    backgroundColor: colors.lightBlue,
    borderRadius: 20,
  },
  popUp: {
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  popUpText: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    margin: 30, 
    backgroundColor: colors.darkGray, 
    height: 1, 
    width: '80%'
  },
});

export default CompanyList;