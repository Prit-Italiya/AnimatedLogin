import React, {useEffect} from 'react';
import Logo from './Logo';
import LogInForm from './LogInForm';
import BackgroundImage from './BackgroundImage';
import FormSubmit from './FormSubmit';
import SignupSection from './SignupSection';
import {useDispatch} from "react-redux";
import {setValue} from "../../store/actions/config";
import {Text, View, StyleSheet} from "react-native";
import {TapGestureHandler} from "react-native-gesture-handler";
import {hp, wp} from "../../shared/ThemeHelper";

const styles = StyleSheet.create({
    introBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: hp(10),
        left: wp(37.5),
        height: hp(5),
        width: wp(25),
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#02447d',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        backgroundColor: 'white'
    }
})

const LoginScreen = props => {

    useEffect(() => {
    });

    const dispatch = useDispatch();

    const sampleValue = {
        set: () => dispatch(setValue())
    };

    const onNavigation = page => {
        props.navigation.navigate(page);
        sampleValue.set();
    };

    return (
        <BackgroundImage>
            <Logo/>
            <LogInForm/>
            <SignupSection/>
            <FormSubmit onNavigate={onNavigation}/>
            <View style={styles.introBtn}>
            <TapGestureHandler onHandlerStateChange={() => props.navigation.navigate('LoginPage')}>
                <Text style={{color: '#0000f6', fontWeight: 'bold'}}>
                    Go to Intro
                </Text>
            </TapGestureHandler>
            </View>
        </BackgroundImage>
    );
};

export default LoginScreen;
