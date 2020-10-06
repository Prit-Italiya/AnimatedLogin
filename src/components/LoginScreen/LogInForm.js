import React, {Component, useState} from 'react';
import {Image, Dimensions, KeyboardAvoidingView, StyleSheet, TouchableOpacity,} from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg from '../../images/eye_black.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});


const LogInForm = props => {

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <UserInput
                source={usernameImg}
                placeholder="Username"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
            />
            <UserInput
                source={passwordImg}
                placeholder="Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                isPassShow={true}
            />
        </KeyboardAvoidingView>
    );
};

export default LogInForm;
