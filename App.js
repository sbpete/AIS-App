import 'react-native-gesture-handler'
import React, { } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
// my components
import Home from './screens/Home';
import Claim from './screens/claim/Claim';
import CompanyPayment from './screens/CompanyPayment';
import CompanyGetCard from './screens/CompanyGetCard';
import CompanyLogin from './screens/CompanyLogin';
import Documents from './screens/Documents';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// linking
import { openURL } from 'expo-linking';
// styling
import { colors } from './styles';

// custom drawer
function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerStyle}>
      <View>
        <DrawerItemList {...props} />
        <DrawerItem label="Email Us" onPress={() => openURL('mailto:info@ais-ins.net')} 
          icon={() => <Icon name='mail' type='feather' color='#585858' size={25} />}
        />
        <DrawerItem label="Call Us" onPress={() => openURL('tel:706-226-0186')} 
          icon={() => <Icon name='phone' type='feather' color='#585858' size={25} />}
        />
        <DrawerItem label="Website" onPress={() => openURL('https://www.advancedinsurancestrategies.com/')} 
          icon={() => <Icon name='globe' type='feather' color='#585858' size={25} />}
        />
      </View>
      <View style={{marginBottom: 100}}>
        <DrawerItem label={() => <Text style={styles.drawerFooterText}>
          300 W. Emery Street,{"\n"}
          Dalton, GA 30722
        </Text>} />
        <DrawerItem label={() => <Text color={colors.darkGray} style={styles.drawerFooterText}>
          Sun: Closed{"\n"}
          Mon - Fri: 8:30am - 5:00pm{"\n"}
          Sat: Closed{"\n"}
        </Text>} />
      </View>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
      return (
        <NavigationContainer >
          <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
          >
              <Drawer.Screen name="Home" component={Home} 
                options={{
                  title: 'Home',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='home'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Make a Claim" component={Claim} 
                options={{
                  title: 'Make a Claim',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='file-text'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Make a Payment" component={CompanyPayment} 
                options={{
                  title: 'Make a Payment',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='credit-card'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Get ID Card" component={CompanyGetCard} 
                options={{
                  title: 'Get ID Card',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='user'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Login To My Account" component={CompanyLogin} 
                options={{
                  title: 'Login To My Account',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='log-in'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Documents" component={Documents} 
                options={{
                  title: 'Documents',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='folder'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="Contact Us" component={ContactUs} 
                options={{
                  title: 'Contact Us',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='phone'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
              <Drawer.Screen name="About Us" component={AboutUs} 
                options={{
                  title: 'About Us',
                  drawerIcon: ({focused, size}) => (
                      <Icon
                        name='info'
                        type='feather'
                        size={size}
                        color={focused ? colors.blue : '#585858'}
                      />
                  ),
                }}
              />
          </Drawer.Navigator>
        </NavigationContainer>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerStyle: {
    marginTop: 85, 
    height: '100%', 
    justifyContent: 'space-between'
  },
  drawerFooterText: {
    color: colors.darkGray,
  }
});