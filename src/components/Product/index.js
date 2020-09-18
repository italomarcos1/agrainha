import React from 'react';
import PropTypes from 'prop-types';

import coins from '~/assets/coins.svg';
import basket_active from '~/assets/icons/basket_active.svg';
import minus from '~/assets/minus.svg';
import plus from '~/assets/plus.svg';

import { Container, ImageContainer, PriceContainer, Options } from './styles';

export default function Product({ product }) {
  return (
    <Container>
      <ImageContainer>
        <img src={product.picture} alt="Product" />
      </ImageContainer>
      <strong>{product.title}</strong>
      <PriceContainer>
        <span>
          <img
            src={coins}
            alt="coins"
            style={{ width: '15%', marginRight: 3 }}
          />
          <strong
            style={{
              fontWeight: 'bold',
              fontFamily: 'SFProSemibold',
              marginRight: 3,
            }}
          >
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
            €{product.oldPrice}
          </p>
        </small>
        <strong>€{product.newPrice}</strong>
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

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
    oldPrice: PropTypes.string,
    newPrice: PropTypes.string,
  }).isRequired,
};
