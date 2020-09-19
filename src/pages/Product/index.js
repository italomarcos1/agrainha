import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductItem from '~/components/Product';
import Grid from '~/components/Grid';
import Cashback from '~/components/Cashback';
import Title from '~/components/Title';

import BackIcon from '~/assets/icons/chevron-left.svg';

import data from '~/data';

import { Container, BreadCrumb } from './styles';

export default function Product({ match }) {
  const {
    params: { index },
  } = match;

  const product = data[index];
  const [gridHeight, setGridHeight] = useState(700);

  useEffect(() => {
    const productsGridRows = Math.ceil(data.length / 2);
    const productsGridHeight = productsGridRows * 415;

    setGridHeight(productsGridHeight);
  }, []);

  return (
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
      <img src={product.picture} alt="Product" width="100%" />
      <Title>Mais Produtos Agrainha</Title>
      <Grid height={gridHeight}>
        {data.map((p, productIndex) => (
          <ProductItem key={p.id} index={productIndex} product={p} />
        ))}
      </Grid>
    </Container>
  );
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
};
