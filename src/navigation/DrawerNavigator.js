import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTab from "./ClientTab";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import DrawerContent from "../components/DrawerContent";
import ClientScreen from "../screens/ClientScreen";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
        drawerContent={props =><DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="PaymentScreen"
                component={ClientScreen}
                options={{
                    title: 'Paiement',
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="BecomeDriverScreen"
                component={ClientScreen}
                options={{
                    title: 'Devenir Conducteur',
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="car"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="ClientScreen"
                component={ClientScreen}
                options={{
                    title: 'service client',
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="SettingScreen"
                component={ClientScreen}
                options={{
                    title: 'Parametre',
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
