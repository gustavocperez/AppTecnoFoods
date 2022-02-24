import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Keyboard,
  Modal,
  Button,
  ActivityIndicator,
  Pressable
  } from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-community/picker';
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react/cjs/react.development';
import firebase from './firebase/src/firebaseConnection';



export default function Inicial() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [user, setUser] = useState('');

    /* async function criarConta(){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value)=>{
            firebase.database().ref('tipo').child(value.user.uid).set({
                nome: nome
            })
        })
    } */
        
    async function logar(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (value) => {
            alert('Bem-vindo: ' + value.user.email);
            setUser(value.user.email);
            () => navigation.navigate('Home');
        })
        .catch( (error) => {
            alert('Ops algo deu errado!');
            return;
        })

    }

        return(
            <View>
                <View>
                    <Image
                    style={styles.logo}
                    source={require('../../image/coverfoto.png')}
                    />
                </View>
                <View style={styles.login}>
                    <TextInput placeholder='Login' 
                    style={styles.logininput}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                    
                    
                    <TextInput placeholder='Senha' 
                    style={styles.senha} 
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='********'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                    
                </View>
                <View>
                    
                </View>
                <TouchableOpacity> 
                    <Text style={styles.esqSenha}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                
                <View style={styles.btn}>
                    <TouchableOpacity 
                        style={styles.btnEntrar} 
                        onPress={logar}
                    >
                        <Text style={styles.txtEntrar}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
}


const styles = StyleSheet.create({
    container:{
        
    },
    login:{
        alignItems: 'center',
    },
    logininput:{
        borderWidth: 0.5,
        width: 326,
        height: 51,
        marginTop: 15,
        borderRadius: 3.5,
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: '#808080',
        padding: 10,
    },
    senha:{
        borderWidth: 0.5,
        marginTop: 23,
        width: 326,
        height: 51,
        borderRadius: 3.5,
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: '#808080',
        padding: 10,
    },
    esqSenha:{
        textAlign: 'right',
        marginRight: 40,
        color: '#808080',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    btnEntrar:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 71,
        backgroundColor: '#1B6942',
        height: 46,
        width: 109,
        borderRadius: 4
    },
    btn:{
        alignItems: 'center'
    },
    txtEntrar:{
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    logo:{
        height: 180,
        width: '107%',
    },
    
});

