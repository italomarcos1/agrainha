import React from 'react';

import Product from '~/components/Product';
import Grid from '~/components/Grid';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Grid>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </Container>
  );
}
