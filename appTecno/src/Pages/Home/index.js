import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <FontAwesome name='bell' size={16} color='#FFFFFFBD'style={styles.logoSino}/>
                    <FontAwesome name='question-circle' size={24} color='#F0F0F0'/>
                </View>
                <Image
                source={require('../../image/gustavo.png')}
                style={styles.fotoUsuario}
                />
                <Text style={styles.headertxt}>Olá Gustavo</Text>
            </View>

            <View style={styles.viewDespesas}>
                <TouchableOpacity style={styles.btnDespesas}>
                    <FontAwesome name='plus' size={60} color='#1B6942'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDespesas}>
                    <FontAwesome name='pencil' size={60} color='#1B6942'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDespesas}>
                    <FontAwesome name='list' size={60} color='#1B6942'/>
                </TouchableOpacity>
            </View>
            <View style={styles.viewTxtDesp}>
                <Text style={styles.txtDespesas}>Nova Despesa</Text>
                <Text style={styles.txtDespesas}>Editar Despesa</Text>
                <Text style={styles.txtDespesas}>Histórico</Text>
            </View>
            <Text style={{marginLeft: 16, fontSize: 20, color: '#000000', marginTop: 30}}
            >Despesas gastas este mês:</Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 16, fontSize: 26, color: '#000000'}}>R$ 3.000</Text>
            <FontAwesome name='eye' size={25} color='#123' style={{marginTop: 5, marginLeft: 10}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        height: 126,
        backgroundColor: '#1B6942',
    },
    headertxt:{
        color: '#Fff',
        fontSize: 20,
        marginLeft: 16
    },
    fotoUsuario:{
        height: 65,
        width: 65,
        marginTop: -8,
        marginLeft: 13,
        borderRadius: 50
    },
    logoSino:{
        paddingRight: 10,
        paddingTop: 4
    },
    headerLogo:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 18.5,
        paddingRight: 5
    },
    viewDespesas:{

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 130,
        alignItems: 'center',
        width: '100%',
        padding: 35,
        marginTop: -15
    },
    txtDespesas:{
        color: '#000',
        marginTop: 18,
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewTxtDesp:{
        flexDirection: 'row',
        marginTop: -65,
        justifyContent: 'space-between',
        padding: 18,
        marginRight: 15
        
    },
})
