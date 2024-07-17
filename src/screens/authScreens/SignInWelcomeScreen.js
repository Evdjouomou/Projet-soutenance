import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import React,{useState, useRef} from 'react'
import {colors, parameters,title} from "../../global/styles"
import * as Animatable from "react-native-animatable"

import { Icon, Button, SocialIcon, Slider } from 'react-native-elements'
import Header from '../../components/Header'
import { ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'


export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex:1}}>
            <View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.Buttons, fontWeight:"bold"}}>BIENVENU SUR APP</Text>
                <Text style={{fontSize:26, color:colors.Buttons, fontWeight:"bold"}}> EX EXPRESS</Text>
            </View>

            <View style={{flex:4, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.Slider1}>
                        <Image 
                            source={require('../../assets/image1.jpeg')}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.Slider2}>
                        <Image 
                            source={require('../../assets/image2.jpeg')}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.Slider3}>
                        <Image 
                            source={require('../../assets/image3.jpeg')}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    
                    <View style={styles.Slider3}>
                        <Image 
                            source={require('../../assets/image4.jpeg')}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4, justifyContent:'flex-end',marginBottom:20}}>
                <View style={{marginHorizontal:20, marginVertical:20}}>
                    <Button 
                        title = "S'IDENTIFIER"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style={{marginHorizontal:20,marginTop:10}}>
                    <Button 
                        title='Creer un compte'
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={()=>{
                            navigation.navigate("RegisterScreen")
                        }}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Slider1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9",
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5",
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9",
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.Buttons
    },
    createButtonTitle:{
        color: colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop: -3
    }
})