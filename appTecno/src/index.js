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
  } from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-community/picker';
import { Header } from 'react-native/Libraries/NewAppScreen';

class Topo extends Component{
    render(){
        return(
            <View>
                <Image
                style={sytles.logo}
                source={require('./image/coverfoto.png')}
                />
            </View>
        );
    }
}

const sytles = StyleSheet.create({
    logo:{
        height: 180,
        width: '100%',
    },
});

export default Topo;