import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";

import WelcomeScreen from './components/WelcomeScreen';
import SettingsScreen from "./components/SettingsMenu";
import LoginScreen from "./components/LoginScreen";
import AnimatedLogin from "./components/SettingsMenu/AnimatedLogin";
import ComponentsScreen from "./components/SettingsMenu/ComponentsScreen";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const IndStackScreens = createStackNavigator();
const SettingsStack = createDrawerNavigator();

const LoginScreenRoutes = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name={`loginScreen`}
                component={LoginScreen}
                options={{
                    title: "Login Screen",
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#000000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        flex: 1,
                        alignItems: 'flex-start'
                    },
                }}
            />
            <LoginStack.Screen
                name={`welcomeScreen`}
                component={WelcomeScreen}
                options={{title: "Welcome Screen"}}
            />
        </LoginStack.Navigator>
    );
};

const ExternalScreensRoutes = () => {
    return (
        <IndStackScreens.Navigator>
            <IndStackScreens.Screen
                name={`Menu`}
                component={ComponentsScreen}
            />
            <IndStackScreens.Screen
                name={`LogIn`}
                component={AnimatedLogin}
            />
        </IndStackScreens.Navigator>
    );
};

const SettingsScreenRoutes = () => {
    return (
        <SettingsStack.Navigator initialRouteName={`settings`}>
            <SettingsStack.Screen
                name={`settings`}
                component={SettingsScreen}
                options={{title: "Settings Screen"}}
            />
            <SettingsStack.Screen
                name={`Shared Screens`}
                component={ExternalScreensRoutes}
            />
        </SettingsStack.Navigator>
    );
};

const TabbedRoutes = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            break;
                        case 'Settings':
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen
                name="Home"
                component={LoginScreenRoutes}
                options={{
                    title: 'My home',
                    headerLeft: null,
                    gesturesEnabled: false
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={SettingsScreenRoutes}
                options={{
                    title: 'Settings',
                    headerLeft: null,
                    gesturesEnabled: false
                }}
            />
        </Tabs.Navigator>
    );
};

const Routes = () => {
    return (
        <MainStack.Navigator initialRouteName={`settings`}>
            <MainStack.Screen
                name={`LoginPage`}
                component={AnimatedLogin}
                options={{
                    headerShown: false,
                    gesturesEnabled: false
                }}
            />
            <SettingsStack.Screen
                name={`TabbedRoutes`}
                component={TabbedRoutes}
                options={{
                    headerLeft: null,
                    gesturesEnabled: false
                }}
            />
        </MainStack.Navigator>
    );
};

export default Routes;
