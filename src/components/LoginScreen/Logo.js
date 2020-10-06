import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logoImg from '../../images/logo.png';

const Logo = () => {
    return <View style={styles.container}>
        <Image source={logoImg} style={styles.image}/>
        <Text style={styles.text}>REACT NATIVE</Text>
    </View>;
};

export default Logo;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});
