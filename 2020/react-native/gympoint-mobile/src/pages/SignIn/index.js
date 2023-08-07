import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton, Logo } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(SignInRequest(id));
    setId('');
  }

  return (
    <Container>
      <Logo />

      <Form>
        <FormInput
          value={id}
          returnKeyType="send"
          placeholder="Informe seu id de cadastro"
          onChangeText={setId}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
