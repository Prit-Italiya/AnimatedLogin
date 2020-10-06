import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 65,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});

const SignupSection = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
    </View>;
};

export default SignupSection;
