import styled from 'styled-components/native';

export const Container = styled.View``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const AmountPrice = styled.View`
  border-radius: 4px;
  padding: 12px;
  flex-direction: row;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const ProductAmount = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const ProductPrice = styled.Text`
  margin-bottom: 4px;
  color: #000;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  background: #7159c1;
  border-radius: 4px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
