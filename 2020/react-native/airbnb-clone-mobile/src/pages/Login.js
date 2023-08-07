import React, { useState, useEffect } from 'react';
import { View, AsyncStorage , KeyboardAvoidingView, Platform , Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png';

export default function pages({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate('List');
      }
    })
  }, [])

  async function handleSubmit() {
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <Image source={logo} />

      <View on style={styles.form}>
         <Text style={styles.label}>SEU E-MAIL *</Text>
         <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
         />

        <Text style={styles.label}>TECNOLOIAS *</Text>
          <TextInput
          style={styles.input}
          autoCapitalize="words"
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
         />

         <TouchableOpacity onPress={handleSubmit} style={styles.button}>
           <Text style={styles.buttonText}>Encontrar spots</Text>
         </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
})