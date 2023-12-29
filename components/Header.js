import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
// styling
import { colors } from '../styles';

const Header = ({ navigation }) => {

    const [drawerPressed, setDrawerPressed] = useState(false);

    return (
        <View style={styles.container}>
            <Button
                containerStyle={styles.buttonContainer}
                type="clear"
                icon={{
                    name: "menu",
                    size: 30,
                    color: colors.blue,
                }} 
                onPress={() => navigation.openDrawer()}
                onPressIn={() => setDrawerPressed(true)}
                onPressOut={() => setDrawerPressed(false)}
            />
            <Image
                source={require('../assets/AIS-logo-simple-invert.png')}
                style={styles.logoStyle}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 120,
        backgroundColor: colors.white,
        shadowColor: colors.blue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    logoStyle: {
        margin: 50,
        marginTop: 80,
        width: 80,
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        top: 52,
    },
});

export default Header;