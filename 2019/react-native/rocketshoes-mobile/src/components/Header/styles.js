import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  background: #000;
`;

export const Div = styled.View`
  flex: 1;
  flex-direction: row;
  background: #000;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const CartView = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CartText = styled.Text`
  position: absolute;
  left: 13px;
  top: -6px;
  text-align: center;
  color: #fff;
  background: #7159c1;
  height: 18px;
  width: 18px;
  border-radius: 9px;
`;

export const LogoView = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
