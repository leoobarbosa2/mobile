import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const CheckInList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 0 40px 0;
`;

export const CheckInButton = styled(Button)``;

export const CheckIn = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
  padding: 15px 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;
`;

export const CheckInText = styled.Text`
  color: #333;
  font-weight: bold;
  padding-left: 10px;
`;

export const CheckInDate = styled.Text`
  color: #999999;
`;
