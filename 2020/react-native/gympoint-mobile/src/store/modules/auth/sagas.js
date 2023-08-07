import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { SignInSuccess, SignInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `students/${id}`);

    const { id: studentId } = response.data;

    if (!studentId) {
      Alert.alert('Erro na autenticação', 'Verifique seu id de aluno');
      return;
    }

    yield put(SignInSuccess(studentId));
  } catch (err) {
    Alert.alert('Erro!', 'Verifique os dados');
    yield put(SignInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
