import React from 'react';
import { View, StyleSheet } from 'react-native';
// my components
import CompanyList from '../components/CompanyList';
import Header from '../components/Header';
import Heading from './Heading';
import FadeInView from '../components/FadeInView';
// styling
import { colors } from '../styles';

// Compaines screen
const CompanyListScreen = ({ filteredCompanies, message, icon, iconType, typeOfData, defaultTitle, navigation }) => {

  // fade in/out when navigating
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setVisible(true);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setVisible(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <FadeInView style={styles.container} navigation={navigation}>
      <Header navigation={navigation}/>
      <Heading text={message} iconName={icon} iconType={iconType} navigation={navigation}/>
      <View style={styles.listBox}>
        <CompanyList filteredCompanies={filteredCompanies} typeOfData={typeOfData} defaultTitle={defaultTitle} />
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.gray,
  },
  listBox: {
    height: '72%', 
    alignItems: 'center',
  },
});

export default CompanyListScreen;