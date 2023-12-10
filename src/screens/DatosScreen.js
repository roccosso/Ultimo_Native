import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Boton from '../components/Boton';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function DatosScreen({navigation}) {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);

  const handleContinuar = async () => {
    if (nombre.toLowerCase() != '' && edad > 0){
      await AsyncStorage.setItem('nombre', nombre);
      await AsyncStorage.setItem('edad', edad);
      navigation.navigate('ResultadoScreen');
    }else{
      let mensaje = "";
      if (nombre.toLowerCase() == ''){
        mensaje =  mensaje + "- El Nombe no puede estar vacio! ";
      }
      if (edad <= 0){
        mensaje =  mensaje + "- Se debe ingresar un numero positivo";
      }
      Alert.alert(mensaje);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.textLabel]}>Nombre</Text>
      <TextInput
        editable
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        inputMode='text'
        onChangeText={input => setNombre(input)}
      />
      <Text style={[styles.textLabel]}>Edad</Text>
      <TextInput
        editable
        style={styles.input}
        value={edad}
        placeholder="Ingrese su edad"
        inputMode='numeric'
        onChangeText={input => setEdad(input)}
      />
      <Boton onPress={() => handleContinuar()} titulo='CONTINUAR' style={styles.button} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel:{
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 5,
    fontWeight: 'bold'
  }
});