import React from 'react';

import product from '~/assets/product.png';

import { Container, Content, PriceContainer, Options } from './styles';

export default function Product() {
  return (
    <Container>
      {/* <img src={product} alt="Product" width="160px" height="160px" /> */}
      <div style={{ width: 160, height: 160, backgroundColor: '#f9f' }} />
      <strong>
        Água com Gás Mineral Natural Gaseificada 25 cl Castello PH de 20º
      </strong>
      <Content />
      <PriceContainer />
      <Options />
    </Container>
  );
}
