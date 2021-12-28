import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native'

export default class Login extends React.Component {
    render() {
        return(
            <View>
                <Text>Tela de Login</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loginBox:
    {
        width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
    }
})
    