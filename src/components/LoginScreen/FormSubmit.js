import React, {useState} from 'react';
import {Animated, Dimensions, Easing, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import spinner from '../../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});

const FormSubmit = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [animatedValue] = useState(new Animated.Value(0));
    const [growAnimated] = useState(new Animated.Value(0));

    const onButtonPress = () => {
        if (isLoading) return;

        setIsLoading(true);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();

        setTimeout(() => {
            _onGrow();
        }, 2000);

        setTimeout(() => {
            props.onNavigate('welcomeScreen');
            setIsLoading(false);
            animatedValue.setValue(0);
            growAnimated.setValue(0);
        }, 2300);
    };

    const _onGrow = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();
    }

    const changeWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = growAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [1, MARGIN],
    });

    return <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onButtonPress()}
                activeOpacity={1}>
                {isLoading ? (
                    <Image source={spinner} style={styles.image}/>
                ) : (
                    <Text style={styles.text}>LOGIN</Text>
                )}
            </TouchableOpacity>
            <Animated.View
                style={[styles.circle, {transform: [{scale: changeScale}]}]}
            />
        </Animated.View>
    </View>;
};

export default FormSubmit;
