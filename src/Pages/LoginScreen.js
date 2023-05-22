import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";


function LoginScreen({ navigation }) {
    const handleClick = () => {
        //navegacao
        navigation.navigate('Dash');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily:'bold', fontSize:50, color:'#000', bottom:80}}>Bem Vindo!</Text>
            <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1 , width: 300, height: 50, marginBottom:20, borderRadius:30}} placeholder="e-mail" keyboardType="email-address" />
            <TextInput placeholderTextColor={'#000'} color={'#000'} style={{borderColor: '#000', borderStyle: 'solid', borderWidth:1, width: 300, height: 50, marginBottom:20, borderRadius:30}} placeholder="senha" secureTextEntry={true} />
            <TouchableOpacity style={{backgroundColor: '#000', width: 300, height: 50, alignContent: 'center', justifyContent: 'center', borderRadius:30 }} onPress={handleClick}>
                <Text style={{color: '#fff', textAlign:'center'}}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default LoginScreen;