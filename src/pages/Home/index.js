import React from 'react';

import Product from '~/components/Product';
import Category from '~/components/Category';
import Grid from '~/components/Grid';
import Cashback from '~/components/Cashback';
import Title from '~/components/Title';

import mainBanner from '~/assets/banners/a-grainha-banner-1@2x.png';
import acp from '~/assets/banners/acp@2x.png';
import parceiro1 from '~/assets/banners/parceiro-1@2x.png';
import parceiro2 from '~/assets/banners/parceiro-2@2x.png';

import data, { categories } from '~/data';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Cashback />
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
      <Title>Conservas, Salsichas e Legumes</Title>
      <Grid>
        {data.map(p => (
          <Product key={p.id} product={p} />
        ))}
      </Grid>
      <Title>Categorias Agrainha</Title>
      <Grid style={{ marginTop: 1500 }}>
        {categories.map(c => (
          <Category key={c.id} category={c} />
        ))}
      </Grid>
    </Container>
  );
}
