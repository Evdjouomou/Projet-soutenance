import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native'
import React,{useState, useRef} from 'react'
import {colors, parameters,title} from "../../global/styles"
import * as Animatable from "react-native-animatable"
import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import { ScrollView } from 'react-native'
import app from '../../../firebasedb'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignInScreen({navigation}){

    const[textInput2Fossued, setTextInput2Fossued] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const textInput1 =useRef(1)
    const textInput2 =useRef(2)

    async function handleSignUp() {
        setLoading(true)
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, pwd);
            setLoading(false);
            Alert.alert('Succès', 'Compte créé avec succès');
        } catch (error) {
            setLoading(false)
            Alert.alert('Erreur', 'Une erreur est survenue lors de la création du compte');
        }
    
    }
    
    async function handleSignIn() {
        setLoading(true)
        try {
            const auth = getAuth(app);
            const response = await signInWithEmailAndPassword(auth, email, pwd);
            setLoading(false);
            Alert.alert('Succès', 'Connexion réussie');
            
        } catch (error) {
            setLoading(false)
            Alert.alert('Erreur', 'email ou mot de passe incorrect');
        }
    }


    return(
        <View style = {styles.container}>
            <Header title = "MON COMPTE" type="arrow-left" navigation = {navigation} />

            <ScrollView>
                <View style={{alignItems:"center",marginTop:10}}>
                    <Text style={styles.text1}>s'il vous plait entrer votre email et mot de passe</Text>
                    <Text style={styles.text1}>Connetez-vous avec votre compte</Text>
                </View>

                <View style={{marginTop:20}}>
                    <View>
                        <TextInput 
                            style = {styles.TextInput1}
                            placeholder='Email'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            ref={textInput1}
                        />
                    </View>
                    <View style={styles.TextInput2}>
                        <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={700}>
                            <Icon
                                iconStyle={{color:colors.grey3}}
                                name="lock"
                                type='material'
                            />
                        </Animatable.View>

                            <TextInput
                                style={{width:"80%"}}
                                placeholder='Mot de passe'
                                value={pwd}
                                onChangeText={text => setPwd(text)}
                                ref={textInput2}
                                secureTextEntry
                                onFocus={()=>{
                                    setTextInput2Fossued(false)
                                }}
                                onBlur={()=>{
                                    setTextInput2Fossued(true)
                                }}
                            />

                        <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={700}>
                        <Icon
                                iconStyle={{color:colors.grey3}}
                                name="visibility-off"
                                type='material'
                            />
                        </Animatable.View>
                    </View>
                    
                </View>

                <View style={{marginHorizontal:20, marginVertical:20}}>
                    <Button 
                        title = "SE CONNECTER"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate('DrawerNavigator')
                        }}
                    />
                </View>
                <View style={{alignItems:"center",marginTop: -10}}>
                    <Text style={{...styles.text1,
                        textDecorationLine:"underline"}}>Mot de passe oublie?</Text>
                </View>
                <View style={{alignItems:"center", marginTop:10, marginBottom:10}}>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Ou</Text>
                </View>
                <View style={{marginHorizontal:10}}>
                    <SocialIcon
                        title="S'identifier avec Facebook"
                        button
                        type='facebook'
                        style={styles.socialIcon}
                        onPress={()=>{}}
                    />
                </View>
                <View style={{marginHorizontal:10}}>
                    <SocialIcon
                        title="S'identifier avec google"
                        button
                        type='google'
                        style={styles.socialIcon}
                        onPress={()=>{}}
                    />
                </View>
                <View style={{marginLeft:20,marginTop:10}}>
                    <Text style={{...styles.text1,
                        textDecorationLine:"underline"}}>Nouveau sur Ex Express?</Text>
                </View>
                <View style={{alignItems:"flex-end",marginHorizontal:10,marginTop:10,marginBottom:30}}>
                    <Button 
                        title='Creer un compte'
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={()=>{
                            navigation.navigate("RegisterScreen")
                        }}
                    />
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        padding: 10
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        padding: 10,
        marginHorizontal:20, 
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
    },
    socialIcon:{
        borderRadius: 12,
        height:50
    }, 
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey1,
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle:{
        color: "#2a9df4",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop: -3
    }
})