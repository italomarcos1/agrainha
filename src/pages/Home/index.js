import React from 'react';

import Product from '~/components/Product';
import Grid from '~/components/Grid';

import mainBanner from '~/assets/banners/a-grainha-banner-1@2x.png';
import acp from '~/assets/banners/acp@2x.png';
import parceiro1 from '~/assets/banners/parceiro-1@2x.png';
import parceiro2 from '~/assets/banners/parceiro-2@2x.png';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={mainBanner} alt="Banner Principal" style={{ width: '100%' }} />
      <img
        src={acp}
        alt="Banner ACP"
        style={{ width: '100%', marginTop: 11 }}
      />
      <img
        src={parceiro1}
        alt="Banner Parceiro 1"
        style={{ width: '100%', marginTop: 11 }}
      />
      <img
        src={parceiro2}
        alt="Banner Parceiro 2"
        style={{ width: '100%', marginTop: 11 }}
      />
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
