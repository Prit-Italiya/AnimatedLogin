import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});

const SettingsScreen = props => {

    return <View style={styles.container}>
        <View>
            <Text>Hello Settings Screen</Text>
        </View>
    </View>;
};

export default SettingsScreen;
