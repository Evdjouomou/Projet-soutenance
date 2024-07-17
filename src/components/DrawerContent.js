import React,{useState,useContext,useEffect} from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon, Button } from "react-native-elements"; 
import { BorderlessButton } from "react-native-gesture-handler";
import { colors } from "../global/styles";
import ClientScreen from "../screens/ClientScreen";

export default function DrawerContent(props, {navigation}){
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.Buttons,}}>
                    <View style={{ alignItems:"center",  paddingLeft:20, paddingVertical:10}} >
                        <Avatar 
                            rounded
                            avatarStyle={StyleSheet.avatar}
                            size={100}
                            source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"}}
                        />
                        <TouchableOpacity style={{position:"absolute", right:70,bottom:0, borderRadius:25,
                            backgroundColor:colors.cardbackground, width:50, height:50,
                            flexDirection:"column",justifyContent:"center", alignItems:"center"}}
                            onPress={alert("ma photo")}
                        >
                            <Icon 
                                type="material-community"
                                name="camera"
                                size={35}
                                color={colors.Buttons}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginLeft:15, flexDirection:"column",alignItems:"center", marginVertical:5 }}>
                        <Text style={{fontWeight:"bold", color:colors.cardbackground, fontSize:25}}>John Marc</Text>
                        <Text style={{ color:colors.cardbackground, fontSize:14}}>john@exexpress.com</Text>
                    </View>

                
                </View>
                
                <DrawerItemList {...props} />
                
                
                <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor={{false: "#767577", true: "#81b0ff"}}
                                thumbColor= "f4f3f4"
                            />
                        </View>
                    </View>
                </View>
                
                
            </DrawerContentScrollView>

            <DrawerItem 
                    label="Sign Out"
                    icon={({color, size})=>(
                        <Icon 
                            type="material-community"
                            name="logout-variant"
                            size={size}
                            color={color}
                        />
                    )}
                />
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.pagebackground
        
    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10, 
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }
})