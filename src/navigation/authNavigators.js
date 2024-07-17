import React from "react";
 
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { ModalSlideFromBottomIOS } from '@react-navigation/stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import MapsScreen from "../screens/MapsScreen";
import ClientScreen from "../screens/ClientScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name="SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />

            <Auth.Screen 
                name="SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />
            <Auth.Screen 
                name="ClientScreen"
                component = {ClientScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />

            <Auth.Screen 
                name="DrawerNavigator"
                component = {DrawerNavigator}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />

            <Auth.Screen 
                name="HomeScreen"
                component = {HomeScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />

            <Auth.Screen 
                name="MapsScreen"
                component = {MapsScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />

            <Auth.Screen 
                name="RegisterScreen"
                component = {RegisterScreen}
                options = {{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' },
                    stackAnimation: 'slide_from_bottom' 
                }}
            />
        </Auth.Navigator>
    )
}