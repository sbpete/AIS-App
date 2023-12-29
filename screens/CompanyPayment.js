import React from 'react';
// my components
import CompanyListScreen from '../components/CompanyListScreen';


// Company Payment screen
const CompanyPayment = ({ navigation }) => {

  return (
    <CompanyListScreen 
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