import React, { useEffect, useState } from 'react';

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
  const [gridHeight, setGridHeight] = useState(700);
  const [categoriesHeight, setCategoriesHeight] = useState(700);

  useEffect(() => {
    const productsGridRows = Math.ceil(data.length / 2);
    const productsGridHeight = productsGridRows * 415;

    const categoriesRows = Math.ceil(categories.length / 2);
    const categoriesGridHeight = categoriesRows * 100;

    setGridHeight(productsGridHeight);
    setCategoriesHeight(categoriesGridHeight);
  }, []);

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
      <Grid height={gridHeight}>
        {data.map((p, index) => (
          <Product key={p.id} index={index} product={p} />
        ))}
      </Grid>
      <Title>Categorias Agrainha</Title>
      <Grid height={categoriesHeight}>
        {categories.map((c, index) => (
          <Category key={c.id} index={index} category={c} />
        ))}
      </Grid>
    </Container>
  );
}
