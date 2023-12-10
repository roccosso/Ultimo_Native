import { View, Text, StyleSheet, Image, Pressable, Alert, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import imagenBoton from '../../assets/contador.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import imagenMessi from '../../assets/messi.jpg'

export default function ResultadoScreen({ navigation }) {

  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState();

  let loadDatos = async () => {
    let n = await AsyncStorage.getItem('nombre');
    setNombre(n);
    let e = await AsyncStorage.getItem('edad');
    setEdad(e);
  }

  useEffect(() => {
    loadDatos();
  }, []);

  if (nombre && edad) {
    return (
      <>
        <View style={[styles.container]}>
          <ImageBackground source={imagenMessi} style={styles.image}>
            <Text style={[styles.text]}>Hola {nombre}, tenes {edad} años de edad</Text>
          </ImageBackground>
        </View>
      </>
    )
  } else {
    return (<></>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20
  },
  botonImagen: {
    marginBottom: 20
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});