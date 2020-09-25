import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Header,
  Container,
  ItemsList,
  Warning,
  ShippingWarning,
  CheckoutButton,
  PriceInfo,
  DiscountCoupon,
} from './styles';

// import data from '~/data';

import Item from '~/components/Item';

import chevron_left from '~/assets/icons/chevron-left.svg';

export default function Basket() {
  const products = useSelector(state => state.cart.products);

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
          {products.length === 0 ? (
            <h1>Lista vazia</h1>
          ) : (
            products.map(p => {
              return <Item item={p} />;
            })
          )}
        </ItemsList>

        <DiscountCoupon>
          <strong>Cupom de Desconto</strong>
          <div>
            <input type="text" />
            <button type="button">Aplicar</button>
          </div>
        </DiscountCoupon>

        <PriceInfo style={{ marginTop: 26 }}>
          <b>Subtotal</b>
          <p>&euro; 167,92</p>
        </PriceInfo>
        <PriceInfo>
          <b>Porte</b>
          <p style={{ color: '#12B118' }}>Grátis</p>
        </PriceInfo>
        <PriceInfo>
          <b>Cupom de Desconto</b>
          <p>&euro; 10,00</p>
        </PriceInfo>
        <PriceInfo>
          <b>Cupom CASHBACK desta compra</b>
          <p>&euro; 16,79</p>
        </PriceInfo>
        <PriceInfo>
          <b>Seu crédito CASHBACK</b>
          <p>&euro; 0,00</p>
        </PriceInfo>
        <PriceInfo>
          <b>TOTAL</b>
          <p style={{ color: '#12B118', fontFamily: 'SFProBold' }}>
            &euro; 150,00
          </p>
        </PriceInfo>
      </Container>
      <CheckoutButton to="/checkout">Continuar</CheckoutButton>
    </>
  );
}
