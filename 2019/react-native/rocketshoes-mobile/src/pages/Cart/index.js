import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/Cart/actions';

import {
  Container,
  Products,
  ProductImage,
  Product,
  ProductInfo,
  ProductDelete,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductTotals,
  ProductActions,
  ButtonAction,
  AmountProduct,
  ProductSubTotal,
  Total,
  TotalText,
  TotalPrice,
  BuyButton,
  BuyText,
} from './styles';

// { products, removeFromCart, updateAmountRequest, total }
export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDescription>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDescription>
              <ProductDelete
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
                <Icon name="delete-forever" size={20} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductTotals>
              <ProductActions>
                <ButtonAction onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ButtonAction>
                <AmountProduct>{product.amount}</AmountProduct>
                <ButtonAction onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ButtonAction>
              </ProductActions>
              <ProductSubTotal>{product.subtotal}</ProductSubTotal>
            </ProductTotals>
          </Product>
        ))}
        <Total>
          <TotalText>Total</TotalText>
          <TotalPrice>{total}</TotalPrice>
          <BuyButton>
            <BuyText>Finalizar Pedido</BuyText>
          </BuyButton>
        </Total>
      </Products>
    </Container>
  );
}
