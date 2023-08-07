import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/Cart/actions';

import {
  Container,
  Product,
  AmountPrice,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  AddButton,
  AddButtonText,
} from './styles';

import api from '../../services/api';

export default function Main({ navigation }) {
  const [products, setProducts] = useState([]);
  const amountSum = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
    navigation.navigate('Cart');
  }

  function renderProduct({ item }) {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <AmountPrice>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmount>{amountSum[item.id] || 0}</ProductAmount>
          </AmountPrice>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <>
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
        />
      </Container>
    </>
  );
}
