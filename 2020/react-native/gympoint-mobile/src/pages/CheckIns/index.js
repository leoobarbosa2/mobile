import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  CheckInList,
  CheckIn,
  CheckInButton,
  CheckInText,
  CheckInDate,
} from './styles';

function CheckIns({ isFocused }) {
  const [totalCheck, setTotalCheck] = useState(0);
  const [checkIns, setCheckIns] = useState([]);
  const studentId = useSelector(state => state.auth.id);

  async function getCheckIns() {
    try {
      const response = await api.get(`/students/${studentId}/checkins`);

      const data = response.data.rows.map(check => ({
        id: check.id,
        created_at: formatRelative(parseISO(check.created_at), new Date(), {
          locale: pt,
        }),
      }));

      const totalCheckIns = response.data.count;

      setTotalCheck(totalCheckIns);

      setCheckIns(data);
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getCheckIns();
    }
  }, [isFocused]); //eslint-disable-line

  async function handleCheckIn() {
    try {
      await api.post(`/students/${studentId}/checkins`);

      getCheckIns();
      Alert.alert('Sucesso!', 'Checkin realizado com sucesso');
    } catch (err) {
      Alert.alert('Ops!', `${err.response.data.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <CheckInButton onPress={handleCheckIn}>Novo check in</CheckInButton>

        <CheckInList
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => {
            return (
              <CheckIn>
                <CheckInText>CheckIn #{totalCheck - index}</CheckInText>
                <CheckInDate>{item.created_at}</CheckInDate>
              </CheckIn>
            );
          }}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(CheckIns);
