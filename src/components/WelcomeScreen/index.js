import React, {useState} from 'react';
import {Animated, Easing, Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import arrowImg from '../../images/left-arrow.png';
import {useSelector} from "react-redux";

const SIZE = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: 100,
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    circle: {
        height: SIZE,
        width: SIZE,
        marginTop: -SIZE,
        borderRadius: 100,
        backgroundColor: '#F035E0',
    },
    image: {
        width: 24,
        height: 24,
    },
});

const WelcomeScreen = props => {
    const [isLoading, setIsLoading] = useState(false);

    const value = useSelector(state => state.config.testVal);

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

    const onButtonClick = () => {
        if (isLoading) return;

        setIsLoading(true);

        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            props.navigation.navigate('loginScreen', {name: 'Jane'})
        }, 500);
    }

    const changeScale = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, SIZE],
    });

    return <View style={styles.container}>
        <View>
            <Text>{value}</Text>
        </View>
        <TouchableOpacity
            onPress={() => onButtonClick()}
            style={styles.button}
            activeOpacity={1}>
            <Image style={styles.image} source={arrowImg}/>
        </TouchableOpacity>
        <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
        />
    </View>;
};

export default WelcomeScreen;
