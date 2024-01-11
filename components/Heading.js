import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
// my components
import FadeInView from './FadeInView';
// styling
import { colors } from '../styles';

const Heading = ({ text, iconName, iconType, navigation }) => {
    return (
        <FadeInView
            style={{flexDirection: 'row', padding: 20}} 
            duration={1000}
            navigation={navigation}
        >   
            <Icon style={{marginRight: 10}} name={iconName} type={iconType} color={colors.black} size={30} />
            <Text style={styles.heading}>{text}</Text>
        </FadeInView>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
    },
});

export default Heading;