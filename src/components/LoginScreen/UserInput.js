import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import eyeImg from "../../images/eye_black.png";

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    inputWrapper: {
        flex: 1,
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    btnEye: {
        position: 'absolute',
        right: 30,
        top: 7
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});

const UserInput = props => {

    const [showPassToggle, setShowPassToggle] = useState(false);

    const onButtonClick = () => {
        showPassToggle ? setShowPassToggle(false) : setShowPassToggle(true);
    };

    return <View style={styles.inputWrapper}>
        <Image source={props.source} style={styles.inlineImg}/>
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={!showPassToggle}
            autoCorrect={props.autoCorrect}
            autoCapitalize={props.autoCapitalize}
            returnKeyType={props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
        />
        {props.isPassShow && <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnEye}
            onPress={() => onButtonClick()}>
            <Image source={eyeImg} style={styles.iconEye}/>
        </TouchableOpacity>}
    </View>;
};

export default UserInput;

UserInput.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    isPassShow: PropTypes.bool
};
