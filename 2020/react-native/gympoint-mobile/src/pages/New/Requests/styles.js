import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const NewRequestButton = styled(Button)``;

export const RequestList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 40px 0;
`;

export const Request = styled.TouchableOpacity`
  margin-top: 15px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
`;

export const RequestHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequestHeaderContent = styled.View``;

export const RequestInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 13px;
  margin-left: 5px;
  font-weight: bold;
  color: ${props => (props.answer ? '#42cb59' : '#999999')};
`;

export const RequestDate = styled.Text`
  color: #999999;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #999999;
  margin-top: 10px;
  line-height: 25px;
`;
