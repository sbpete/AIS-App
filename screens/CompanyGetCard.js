import React from 'react';
// my components
import CompanyListScreen from '../components/CompanyListScreen';
// data
import { companies } from '../macros';


// Get ID Card screen
const CompanyGetCard = ({ navigation }) => {

  const filteredCompanies = companies.filter(company => company.idCardData[0].data.length > 0);

  return (
    <CompanyListScreen 
      filteredCompanies={filteredCompanies}
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