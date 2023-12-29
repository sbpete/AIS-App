import React from 'react';
// my components
import CompanyListScreen from '../components/CompanyListScreen';


// Get ID Card screen
const CompanyGetCard = ({ navigation }) => {

  return (
    <CompanyListScreen 
      message='Get ID Card' 
      icon = 'user'
      iconType='feather'
      typeOfData='idCardData' 
      defaultTitle='Get ID Card' 
      navigation={navigation}
    />
  );
}

export default CompanyGetCard;