import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

function Register(props){

  const realizarCadastro = () => {

  }

    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nome"
              underlineColorAndroid='transparent'
              />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              />
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
          />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={realizarCadastro}>
          <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableHighlight>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default Register;
 