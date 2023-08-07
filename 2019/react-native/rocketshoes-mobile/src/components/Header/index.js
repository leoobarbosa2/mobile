import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Div, Logo, CartView, CartText, LogoView } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <>
      <Container>
        <Div>
          <LogoView onPress={() => navigation.navigate('Main')}>
            <Logo />
          </LogoView>
          <CartView onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" size={20} color="#FFF" />
            <CartText>{cartSize}</CartText>
          </CartView>
        </Div>
      </Container>
    </>
  );
}
