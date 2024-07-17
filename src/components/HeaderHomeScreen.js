import React from "react";
import { View ,StyleSheet, Text} from "react-native";
import {  Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";

export default function HeaderHomeScreen({navigation}){

    return(
        <View style={styles.header}>
            <View style={{alignItem:"center", justifyContent:"center", marginLeft:15}}>
                <Icon 
                    type="material-community"
                    name="menu"
                    color={colors.cardbackground}
                    size={32}
                    title="Toggle Drawer"
                    onPress={()=>{
                        navigation.toggleDrawer()
                    }}
                />
            </View>
                
                <View style={{alignItem:"center", justifyContent:"center", }}>
                    <Text style={{color:colors.cardbackground, fontSize:20, fontWeight:"bold"}}>EX_Express</Text>
                </View>
                <View style={{alignItem:"center", justifyContent:"center",position:"relative", right:80}}>
                    <Icon 
                        type="material-community"
                        name="motorbike"
                        color={colors.cardbackground}
                        size={32}
                    />
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor: colors.Buttons,
        height:parameters.headerHeight,
        justifyContent:"space-between"
    }
})