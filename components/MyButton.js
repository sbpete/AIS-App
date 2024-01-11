import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// styling
import { colors } from '../styles';

const MyButton = ({ text, onPress }) => {

    const [pressed, setPressed] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.itemContainer, {
                    paddingHorizontal: pressed ? 25 : 30,
                    backgroundColor: pressed ? colors.gray : colors.white,
                }]}
                onPress={onPress}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Text style={[styles.itemText, {fontSize: pressed ? 15 : 16}]}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    itemContainer: {
        padding: 10,
        borderRadius: 20,
        shadowColor: colors.blue,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
    },
    itemText: {
        fontWeight: 'bold',
        color: colors.blue,
    },
});

export default MyButton;