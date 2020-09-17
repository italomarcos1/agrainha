import React from 'react';

import product from '~/assets/product.jpeg';
import coins from '~/assets/coins.svg';
import basket_active from '~/assets/icons/basket_active.svg';
import minus from '~/assets/minus.svg';
import plus from '~/assets/plus.svg';

import { Container, ImageContainer, PriceContainer, Options } from './styles';

export default function Product() {
  return (
    <Container>
      <ImageContainer>
        <img src={product} alt="Product" />
      </ImageContainer>
      <strong>
        Água com Gás Mineral Natural Gaseificada 25 cl Castello PH de 20º
      </strong>
      <PriceContainer>
        <span>
          <img
            src={coins}
            alt="coins"
            style={{ width: 30, height: 20, marginRight: 3 }}
          />
          <strong style={{ fontWeight: 'bold', marginRight: 3 }}>
            €1.290,08
          </strong>
          DE CRÉDITO
        </span>
        <small>
          antes
          <p
            style={{
              marginLeft: 3,
              display: 'inline',
              textDecoration: 'line-through',
            }}
          >
            €2,910,99
          </p>
        </small>
        <strong>€1.900,80</strong>
      </PriceContainer>
      <Options>
        <div>
          <button type="button">
            <img src={minus} alt="icon" />
          </button>
          <strong>1</strong>
          <button type="button">
            <img src={plus} alt="icon" />
          </button>
        </div>
        <button type="button">
          <img src={basket_active} alt="icon" />
        </button>
      </Options>
    </Container>
  );
}
