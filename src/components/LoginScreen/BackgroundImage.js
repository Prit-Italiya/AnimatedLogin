import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import bgSrc from '../../images/wallpaper.png';

const BackgroundImage = props => {
    return <ImageBackground style={styles.picture} source={bgSrc}>
        {props.children}
    </ImageBackground>;
};

export default BackgroundImage;

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});
