import React from 'react';
// my components
import CompanyListScreen from '../components/CompanyListScreen';


// Company Log In screen
const CompanyLogin = ({ navigation }) => {

  return (
    <CompanyListScreen 
      message='Log in' 
      icon = 'log-in'
      iconType='feather'
      typeOfData='loginData' 
      defaultTitle='Login'
      navigation={navigation}
    />
  );
}

export default CompanyLogin;