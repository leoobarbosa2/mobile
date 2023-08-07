import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  Container,
  Answer,
  AnswerHeader,
  TitleAnswer,
  TitleQuestion,
  AnswerDate,
  Text,
} from './styles';
import Background from '~/components/Background';

export default function Details({ navigation }) {
  const helpOrder = navigation.getParam('item');

  const formattedDate = useMemo(
    () =>
      formatRelative(parseISO(helpOrder.createdAt), new Date(), { locale: pt }),
    [helpOrder]
  );

  return (
    <Background>
      <Container>
        <Answer>
          <AnswerHeader>
            <TitleQuestion>Pergunta</TitleQuestion>
            <AnswerDate>{formattedDate}</AnswerDate>
          </AnswerHeader>

          <Text>{helpOrder.question}</Text>

          <TitleAnswer>Resposta</TitleAnswer>
          <Text>
            {helpOrder.answer || 'Sua pergunta ainda não foi respondida'}
          </Text>
        </Answer>
      </Container>
    </Background>
  );
}
