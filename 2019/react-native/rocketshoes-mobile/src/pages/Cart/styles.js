import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 15px;
  border-radius: 4px;
  background: #fff;
`;

export const Products = styled.View`
  padding: 10px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductDescription = styled.View`
  width: 220px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const ProductTotals = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
  padding: 6px 4px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
`;

export const ButtonAction = styled.TouchableOpacity``;

export const AmountProduct = styled.Text`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  border-radius: 4px;
`;

export const ProductSubTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Total = styled.View`
  align-items: center;
`;

export const TotalText = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #c4c4c4;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const BuyButton = styled.TouchableOpacity`
  margin-top: 30px;
  align-items: center;
  width: 100%;
  background: #7159c1;
  border-radius: 6px;
`;

export const BuyText = styled.Text`
  padding: 8px;
  color: #fff;
`;
