import React,{useState} from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput  } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { Formik } from 'formik'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { colors } from '../../global/styles'
import Header from '../../components/Header'
import { app, auth } from '../../../firebasedb'

const initiaValues = {telephne:'', prenom:'', nom:'',email:"", pwd:"", username:""}

export default function RegisterScreen({navigation}) {

    const [pwdFocussed, setPwdFocussed] = useState(false)
    const [pwdBlur, setPwdBlur] = useState(false)

    

  return (
    <View style={styles.container}>

        <Header title = "MON COMPTE" type="arrow-left" navigation = {navigation} />
        
        <ScrollView keyboardShouldPersistTaps="always">
            <Formik initialValues={initiaValues} onSubmit={handleSignUp}>
                {(props)=>(
                    <View style={styles.view2}>
                        <View>
                            <Text style={styles.text2}>Nouveau sur Ex Express</Text>
                        </View>
                        
                        <View style={styles.view6}>
                            <TextInput 
                                placeholder='numero de telephone'
                                style={styles.input1}
                                keyboardType='number-pad'
                                autoFocus={true}
                                value={props.values.Telephne}
                                onPress={props.handleChange('telephone')}
                            />
                        </View>
                        <View style={styles.view6}>
                            <TextInput 
                                placeholder='Prenom'
                                style={styles.input1}
                                autoFocus={false}
                                value={props.values.prenom}
                                onPress={props.handleChange('prenom')}
                            />
                        </View>
                        <View style={styles.view6}>
                            <TextInput 
                                placeholder='Nom'
                                style={styles.input1}
                                autoFocus={false}
                                value={props.values.nom}
                                onPress={props.handleChange('nom')}
                            />
                        </View>
                        <View style={styles.view10}>
                            <View>
                                <Icon 
                                    name='email'
                                    style={styles.email}
                                    color={colors.grey3}
                                    type='material'
                                />
                            </View>
                            <View style={styles.view11}>
                                <TextInput 
                                    placeholder='Email'
                                    style={styles.input4}
                                    autoFocus={false}
                                    value={props.values.email}
                                    onPress={props.handleChange('email')}
                                />
                            </View>
                        </View>
                        <View style={styles.view14}>
                            <Animatable.View animation={pwdFocussed? "fadeInRight" : "fadeInLeft"} duration={400}>
                                <Icon 
                                    name = "lock" 
                                    color={colors.grey3}
                                    type="material"
                                />
                            </Animatable.View>
                            <TextInput 
                                placeholder='Mot de passe'
                                style={{flex:1, marginLeft:10}}
                                autoFocus={false}
                                value={props.values.pwd}
                                onPress={props.handleChange('pwd')}
                                onFocus={()=>{setPwdFocussed(true)}}
                                onBlur={()=>{setPwdBlur(true)}}
                                secureTextEntry={true}
                            />
                            <Animatable.View animation={pwdBlur? "fadeInRight" : "fadeInLeft"} duration={400}>
                                <Icon 
                                    name='visibility-off'
                                    color={colors.grey3}
                                    type='material'
                                    style={{marginRight:10}}
                                />
                            </Animatable.View>
                        </View>

                        <View style={styles.view15}>
                            <Text style={styles.text3}>En créant ou en vous connectant à un compte, vous</Text>
                            <View style={styles.view16}>
                                <Text style={styles.text4}>acceptez nos conditions generales</Text>
                                <Text style={styles.text3}> et notre</Text>
                            </View>
                            <Text style={styles.text4}>declaration de confidentialite</Text>

                        </View>

                        <View style={styles.view17}>
                            <Button 
                                title="Creer un compte"
                                buttonStyle={styles.button1}
                                titleStyle={styles.title}
                                
                            />
                        </View>
                    </View>
                )}

            </Formik>
            <View style={styles.view18}>
                <Text style={styles.text5}>Ou</Text>
            </View>
            <View style={styles.view19}>
                <View style={styles.view20}>
                    <Text style={styles.text5}>Si vous avez deja un compte Ex express?</Text>
                </View>
                <View style={styles.view21}>
                    <Button 
                        title="Se connecter"
                        buttonStyle={styles.button2}
                        titleStyle={styles.title2}
                        onPress={()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    view1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        paddingHorizontal:15
    },
    text1:{
        //color:colors.background2,
        fontWeight:'bold'
    },
    view2:{
        justifyContent:'flex-start',
        backgroundColor:'white',
        paddingHorizontal:15
    },
    view3:{
        marginTop:5,
        marginBottom:10
    },
    text2:{
        fontSize:15,
        color:colors.grey2,
        marginTop:10
    },
    view4:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5
    },
    view5:{
        marginLeft:30,
        marginTop:30,
    },
    input1:{
        fontSize:16,
    },
    view6:{
        flexDirection:'row',
        borderWidth:1,
        borderColor: colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48,

    },
    view7:{
        marginLeft:0,
        maxWidth:'65%'
    },
    input2:{
        fontSize:16,
        marginLeft: 0,
        marginBottom:0
    },
    view8:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    view9:{
        marginLeft:0,
        maxWidth:'65%'
    },
    input3:{
        fontSize:16,
        marginLeft:0,
        marginBottom:0
    },
    view10:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    email:{
        fontSize:24,
        padding:0,
        paddingBottom:0,
        marginTop:11,
        marginLeft:12
    },
    view11:{
        marginLeft:30,
        maxWidth:'65%'
    },
    input4:{
        fontSize:16,
        marginTop:8,
        marginLeft:-20
    },
    view13:{
        flexDirection:'row',
        height:40
    },
    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingVertical:10,
        marginTop:20
    },
    view15:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    text3:{
        fontSize:13
    },
    view16:{
        flexDirection:'row'
    },
    text4:{
        textDecorationLine:'underline',
        color:'green',
        fontSize:13,
    },
    button1:{
        //backgroundColor:colors.background2,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        //borderColor:colors.background2,
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    },
    view17:{
        marginVertical:10,
        marginTop:30
    },
    view18:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:15
    },
    text5:{
        fontSize:15,
        fontWeight:'bold'
    },
    view19:{
        backgroundColor:'white',
        paddingHorizontal:15,
    },
    view20:{marginTop:5},
    view21:{
        marginTop:5,
        marginBottom:10,
        alignItems:'flex-end'
    },
    button2:{
        backgroundColor:colors.cardbackground,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey1,
        height:40,
        paddingHorizontal:20,
    },
    title2:{
        color:colors.Buttons,
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    }
})