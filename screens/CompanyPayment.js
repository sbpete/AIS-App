import React from 'react';
// my components
import CompanyListScreen from '../components/CompanyListScreen';
// data
import { companies } from '../macros';

// Company Payment screen
const CompanyPayment = ({ navigation }) => {

  const filteredCompanies = companies.filter(company => company.paymentData[0].data.length > 0);

  return (
    <CompanyListScreen
      filteredCompanies={filteredCompanies}
      message='Make a Payment' 
      icon = 'credit-card'
      iconType='feather'
      typeOfData='paymentData' 
      defaultTitle='Make a Payment' 
      navigation={navigation}
    />
  );
}

export default CompanyPayment;