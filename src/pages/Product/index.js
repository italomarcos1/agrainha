import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductItem from '~/components/Product';
import Grid from '~/components/Grid';
import Cashback from '~/components/Cashback';
import Title from '~/components/Title';

import BackIcon from '~/assets/icons/chevron-left.svg';
import coins from '~/assets/coins.svg';
import minus from '~/assets/icons/minus.svg';
import plus from '~/assets/icons/plus.svg';
import basket_active from '~/assets/icons/basket_active.svg';
import heartOn from '~/assets/icons/heart-on.svg';
import heartOff from '~/assets/icons/heart-off.svg';

import data from '~/data';

import {
  Container,
  BreadCrumb,
  ProductInfo,
  ProductTitle,
  ProductShipping,
  ProductDescription,
  Options,
  PriceContainer,
} from './styles';

export default function Product({ match }) {
  const {
    params: { index },
  } = match;

  const product = data[index];

  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [gridHeight, setGridHeight] = useState(700);

  // const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [amount, setAmount] = useState(0);
  // ref.current.scrollTo(0, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const productsGridRows = Math.ceil(data.length / 2);
    const productsGridHeight = productsGridRows * 415;

    setGridHeight(productsGridHeight);
  }, []);

  return (
    <>
      <Container>
        <Cashback />
        <BreadCrumb>
          <Link to="/">
            <img
              src={BackIcon}
              alt="Go Back"
              style={{ marginTop: 6, marginRight: 10 }}
            />
          </Link>
          Congelados
        </BreadCrumb>
        <FavoriteButton
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <img src={isFavorite ? heartOn : heartOff} alt="Favorite" />
        </FavoriteButton>
        <img src={product.picture} alt="Product" width="100%" />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductShipping>
            Envio: <span>&euro;4,00</span>
          </ProductShipping>
          <ProductShipping
            style={{
              color: '#F5B027',
            }}
          >
            Envio gratuito para compras acima de &euro;30,00
          </ProductShipping>
          <ProductShipping>
            Tempo de entrega: <span>1 dia</span>
          </ProductShipping>

          <ProductDescription>
            {`Reciclamos todo o tipo de plástico desde sacos a embalagens, se
          pretende ajudar nosso planeta, envie pelos nossos motoristas todo o
          plástico que não precisa que nós lhe damos-lhe outra vida :)`}
          </ProductDescription>

          <PriceContainer>
            <div>
              <strong>&euro;{product.newPrice}</strong>
              <small>
                antes
                <p style={{ marginLeft: 5 }}>&euro;{product.oldPrice}</p>
              </small>
            </div>
            <span>
              <img
                src={coins}
                alt="coins"
                style={{ width: '10%', marginRight: 5 }}
              />
              <strong>&euro;0.13</strong>
              DE CRÉDITO
            </span>
          </PriceContainer>
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
              Adicionar ao cesto
            </button>
          </Options>
        </ProductInfo>

        <Title>Mais Produtos Agrainha</Title>
        <Grid height={gridHeight}>
          {data.map((p, productIndex) => (
            <ProductItem key={p.id} index={productIndex} product={p} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
};
