import React from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  Container,
  ItemsList,
  Warning,
  ShippingWarning,
  CheckoutButton,
} from './styles';

import data from '~/data';

import Item from '~/components/Item';

import chevron_left from '~/assets/icons/chevron-left.svg';

export default function Basket() {
  return (
    <>
      <Header>
        <Link to="/">
          <img src={chevron_left} alt="Voltar ao menu Principal" />
        </Link>
        Cesto de Compras
      </Header>
      <Container>
        <Warning>
          O pagamento da encomenda é efectuado no ato da entrega.
          <br /> A confirmação da sua encomenda será feita através de contacto
          telefónico pelos nossos colaboradores.
        </Warning>
        <ShippingWarning>
          Levantamento na loja:
          <b style={{ fontFamily: 'SFProBold', marginLeft: 3 }}>Grátis</b>
          <br /> Compras até € 30,00:
          <b style={{ fontFamily: 'SFProBold', marginLeft: 3 }}>
            Entrega € 5,00
          </b>
          <br /> Compras acima de € 30,00:
          <b style={{ fontFamily: 'SFProBold', marginLeft: 3 }}>
            Entrega Grátis
          </b>
        </ShippingWarning>
        <ItemsList>
          {data.map(p => (
            <Item item={p} />
          ))}
        </ItemsList>
      </Container>
      <CheckoutButton to="/checkout">Continuar</CheckoutButton>
    </>
  );
}
