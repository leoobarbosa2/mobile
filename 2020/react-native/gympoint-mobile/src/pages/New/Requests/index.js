import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  NewRequestButton,
  RequestList,
  Request,
  RequestInfo,
  Text,
  RequestHeader,
  RequestHeaderContent,
  RequestDate,
  Question,
} from './styles';

import Background from '~/components/Background';

function Requests({ navigation, isFocused }) {
  const studentId = useSelector(state => state.auth.id);
  const [helpOrders, setHelpOrders] = useState([]);

  async function getHelpOrders() {
    try {
      const response = await api.get(`help-orders/students`, {
        params: { id: studentId },
      });

      const data = response.data.map(request => ({
        ...request,
        created_at: formatRelative(parseISO(request.createdAt), new Date(), {
          locale: pt,
        }),
      }));
      setHelpOrders(data);
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getHelpOrders();
    }
  }, [isFocused]); //eslint-disable-line

  function handleNavigate(item) {
    navigation.navigate('Details', { item });
  }

  return (
    <Background>
      <Container>
        <NewRequestButton onPress={() => navigation.navigate('NewRequest')}>
          Novo pedido de auxílio
        </NewRequestButton>

        <RequestList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Request onPress={() => handleNavigate(item)}>
              <RequestHeader>
                <RequestHeaderContent>
                  {item.answer ? (
                    <RequestInfo>
                      <Icon name="check-circle" size={13} color="#42cb59" />
                      <Text answer>Respondido</Text>
                    </RequestInfo>
                  ) : (
                    <RequestInfo>
                      <Icon name="check-circle" size={13} color="#999999" />
                      <Text>Sem Resposta</Text>
                    </RequestInfo>
                  )}
                </RequestHeaderContent>
                <RequestDate>{item.created_at}</RequestDate>
              </RequestHeader>

              <Question>{item.question}</Question>
            </Request>
          )}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Requests);
