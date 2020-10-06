import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from "./src/Routes";
import {Provider} from "react-redux";
import store from "./src/store/store";

console.disableYellowBox = true;

const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <View style={styles.container}>
                <Routes/>
            </View>
        </NavigationContainer>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('App', () => App);
