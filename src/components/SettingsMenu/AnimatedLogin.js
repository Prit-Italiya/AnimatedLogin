import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View, TextInput} from 'react-native';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {Easing} from 'react-native-reanimated';
import SVG, {Image, Circle, ClipPath} from 'react-native-svg';

import {hp, normalize, wp} from '../../shared/ThemeHelper';
import Wallpaper from '../../images/wallpaper.png';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    btnBlock: {
        height: height / 3,
    },
    btn: {
        backgroundColor: 'white',
        height: hp(10),
        marginHorizontal: wp(7),
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: normalize(20)
    },
    textInput: {
        height: hp(8.5),
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: wp(7),
        paddingLeft: 10,
        marginVertical: 3,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    resetBtn: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width/2 - 20,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    skipBtnBlock: {
        position: 'absolute',
        right: wp(7),
        top: hp(5),
        zIndex: 999,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5),
        width: wp(15),
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#02447d',

    }
});

const {
    Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug,
    timing, clockRunning, interpolate, Extrapolate, concat
} = Animated;

const runTiming = (clock, value, dest) => {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
};

const AnimatedLogin = props => {

    useEffect(() => {
    });

    const buttonOpacity = new Value(1);

    const buttonY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    });
    const bgY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-height/3 - hp(29), 0],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputZindex = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputOpacity = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    });
    const textInputY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
    });
    const rotateCross = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [180, 360],
        extrapolate: Extrapolate.CLAMP
    });

    const onStateChange = event([
        {
            nativeEvent: ({state}) => block([cond(eq(state, State.END), set(buttonOpacity,
                runTiming(new Clock(), 1, 0)))])
        }
    ]);

    const onCloseStateChange = event([
        {
            nativeEvent: ({state}) => block([cond(eq(state, State.END), set(buttonOpacity,
                runTiming(new Clock(), 0, 1)))])
        }
    ]);

    return <View style={styles.container}>
        <View style={styles.skipBtnBlock}>
            {/*<Button
                bordered
                style={styles.skipBtn}
                title={`skip`}
                onPress={() => props.navigation.navigate('Home')}
            >

            </Button>*/}
            <TapGestureHandler onHandlerStateChange={() => props.navigation.navigate('TabbedRoutes')}>
            <Text style={{color: '#0000f6', fontWeight: 'bold'}}>
                Skip
            </Text>
            </TapGestureHandler>
        </View>
        <Animated.View style={{...StyleSheet.absoluteFill, transform: [{translateY: bgY}]}}>
                <SVG height={height + hp(25)} width={width}>
                <ClipPath id={`clip`}>
                    <Circle r={height + hp(25)} cx={width / 2}/>
                </ClipPath>
                <Image
                    href={Wallpaper}
                    height={height + hp(25)}
                    width={width}
                    preserveAspectRatio='xMidYMid slice'
                    clipPath="url(#clip)"
                />
            </SVG>
        </Animated.View>
        <View style={styles.btnBlock}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
                <Animated.View
                    style={{...styles.btn, opacity: buttonOpacity,
                        transform: [{translateY: buttonY}]}}>
                    <Text style={styles.btnText}>SIGN IN</Text>
                </Animated.View>
            </TapGestureHandler>
            <TapGestureHandler>
                <Animated.View
                    style={{...styles.btn, backgroundColor: '#2E71DC',
                        opacity: buttonOpacity, transform: [{translateY: buttonY}]}}>
                    <Text style={styles.btnText}>LOG IN WITH FACEBOOK</Text>
                </Animated.View>
            </TapGestureHandler>
            <Animated.View
                style={{
                    zIndex: textInputZindex,
                    opacity: textInputOpacity,
                    display: textInputOpacity ? 'unset' : 'none',
                    transform: [{translateY: textInputY}],
                    height: height/2.7,
                    ...StyleSheet.absoluteFill,
                    top: null,
                    justifyContent: 'center'
                }}
            >

                <TapGestureHandler onHandlerStateChange={onCloseStateChange}>
                    <Animated.View style={styles.resetBtn}>
                        <Animated.Text
                            style={
                                {
                                    fontSize: normalize(15),
                                    transform: [{rotate: concat(rotateCross, 'deg')}]
                                }
                            }
                        >
                            X
                        </Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
                <TextInput
                    placeholder={`EMAIL`}
                    style={styles.textInput}
                    placeholderTextColor='black'
                />
                <TextInput
                    placeholder={`PASSWORD`}
                    style={styles.textInput}
                    placeholderTextColor='black'
                />

                <Animated.View style={styles.btn}>
                    <Text style={{ fontSize: normalize(20), fontWeight: 'bold'}}>
                        SIGN IN
                    </Text>
                </Animated.View>
            </Animated.View>
        </View>
    </View>;
};

export default AnimatedLogin;
