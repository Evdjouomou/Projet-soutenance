import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/styles";
import HeaderHomeScreen from "../components/HeaderHomeScreen";
import { Icon } from "react-native-elements";

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <HeaderHomeScreen navigation = {navigation}/>

            <Text>Hello HomeScreen</Text>
            <View style={styles.floatButtom}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('MapsScreen')
                    }}
                    style={{position:"relative", top:14}}
                >
                    <Icon 
                        name="place"
                        type="material"
                        size={32}
                        color={colors.Buttons}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    floatButtom:{
        position:"absolute",
        bottom:100,
        right:25,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center'
    }
})