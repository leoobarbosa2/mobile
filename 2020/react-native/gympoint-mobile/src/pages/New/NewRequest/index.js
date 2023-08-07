import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import { Container, SubmitButton, Text } from './styles';
import Background from '~/components/Background';

export default function NewRequest({ navigation }) {
  const studentId = useSelector(state => state.auth.id);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`students/${studentId}/help-orders`, {
        question,
      });
      Alert.alert(
        'Sucesso',
        'Sua pergunta foi registrada, aguarde que um de nossos profissionais responda!'
      );
      navigation.navigate('Requests');
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <Text
          multiline
          autoFocus
          value={question}
          onChangeText={setQuestion}
          placeholder="Inclua seu pedido de auxílio"
        />

        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </Background>
  );
}
