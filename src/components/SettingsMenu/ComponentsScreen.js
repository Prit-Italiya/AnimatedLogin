import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
    }
});

const ComponentsScreen = props => {

    return <View style={styles.container}>
        <View>
            <Text>Shared Components List</Text>
        </View>
    </View>;
};

export default ComponentsScreen;
