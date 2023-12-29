import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
// styling
import { colors } from '../styles';

const Heading = ({ text, iconName, iconType }) => {
    return (
        <View style={{flexDirection: 'row', padding: 20}}>
            <Icon style={{marginRight: 10}} name={iconName} type={iconType} color={colors.black} size={30} />
            <Text style={styles.heading}>{text}</Text>
        </View>
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