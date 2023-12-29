import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Overlay } from 'react-native-elements'
//  my components
import CompanyCard from '../components/CompanyCard';
import MyButton from '../components/MyButton';
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
        alphabeticalCompanies.map(company => (
          <CompanyCard 
            key={company.name} 
            company={company} 
            data={company[typeOfData]}
            defaultTitle={defaultTitle}
            setOverlay={changeOverlay}
          />
        ))
      }
      </ScrollView>
      <Overlay overlayStyle={styles.popUp} isVisible={visible} onBackdropPress={toggleOverlay}>
        {overlay.message && <Text style={styles.popUpText}>{overlay.message}</Text>}
        {overlay.phone && <MyButton text='Call' onPress={() => openURL(`tel:${overlay.phone}`)} />}
        {overlay.link && <MyButton text='Website' onPress={() => openURL(overlay.link)} />}
      </Overlay>
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
    backgroundColor: colors.grey,
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
});

export default CompanyList;