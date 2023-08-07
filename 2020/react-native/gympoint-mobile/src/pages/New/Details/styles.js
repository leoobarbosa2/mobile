import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 30px;
`;

export const Answer = styled.View`
  padding: 20px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const AnswerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleQuestion = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const TitleAnswer = styled.Text`
  color: #333;
  font-weight: bold;
  margin-top: 20px;
`;

export const AnswerDate = styled.Text`
  color: #999999;
`;

export const Text = styled.Text.attrs({})`
  display: flex;
  color: #999999;
  margin-top: 20px;
  line-height: 23px;
`;
