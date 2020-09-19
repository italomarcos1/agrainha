import React, { useState } from 'react';
import PropTypes from 'prop-types';

import coins from '~/assets/coins.svg';
import basket_active from '~/assets/icons/basket_active.svg';
import minus from '~/assets/icons/minus.svg';
import plus from '~/assets/icons/plus.svg';
import heartOn from '~/assets/icons/heart-on.svg';
import heartOff from '~/assets/icons/heart-off.svg';

import {
  Container,
  ImageContainer,
  PriceContainer,
  Options,
  Separator,
  FavoriteButton,
} from './styles';

export default function Product({ product }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <FavoriteButton type="button" onClick={() => setIsFavorite(!isFavorite)}>
        <img src={isFavorite ? heartOn : heartOff} alt="Favorite" />
      </FavoriteButton>
      <ImageContainer>
        <img src={product.picture} alt="Product" />
      </ImageContainer>
      <div className="content">{product.title}</div>
      <PriceContainer>
        <span>
          <img
            src={coins}
            alt="coins"
            style={{ width: '15%', marginRight: 1 }}
          />
          <strong>€1.290,08</strong>
          DE CRÉDITO
        </span>
        <small>
          antes
          <p>€{product.oldPrice}</p>
        </small>
        <strong>€{product.newPrice}</strong>
      </PriceContainer>
      <Separator />
      <Options>
        <div>
          <button
            type="button"
            disabled={amount === 0}
            onClick={() => setAmount(amount - 1)}
          >
            <img src={minus} alt="icon" />
          </button>
          <strong>{amount}</strong>
          <button type="button" onClick={() => setAmount(amount + 1)}>
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
    isFavorite: PropTypes.bool,
  }).isRequired,
};
