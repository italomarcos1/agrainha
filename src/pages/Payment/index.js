import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Item from '~/components/Item';
import CheckoutHeader from '~/components/CheckoutHeader';

// import data from '~/data';

import {
  Container,
  ChangeInformationButton,
  Info,
  PriceInfo,
  ItemsList,
  Warning,
} from './styles';

export default function Delivery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userData = useSelector(state => state.user.info);
  const products = useSelector(state => state.cart.products);

  const {
    name,
    nickname,
    email,
    phone,
    nif,
    countryCode,
    wantsNif,
    place,
    number,
    district,
    city,
    postCode,
    deliveryMethod,
    deliveryDate,
    deliveryTime,
    // deliveryLocation,
    location,
  } = userData;

  const handleSubmit = useCallback(formData => {
    console.log(formData); // eslint-disable-line
  }, []);

  return (
    <>
      <CheckoutHeader active={3} />
      <Container onSubmit={handleSubmit}>
        <h1>Encomenda Nº 827712</h1>
        <Info>
          <b>Nome</b>
          <p>
            {name} {nickname}
          </p>
        </Info>
        <Info>
          <b>NIF</b>
          <p>{nif}</p>
        </Info>
        <Info>
          <b>NIF na Factura</b>
          <p>{wantsNif}</p>
        </Info>
        <Info>
          <b>Email</b>
          <p>{email}</p>
        </Info>
        <Info>
          <b>Telemóvel</b>
          <p>
            +{countryCode} {phone}
          </p>
        </Info>
        <Info custom>
          <b style={{ height: 62 }}>Morada</b>
          <p>
            {place}, {number}
            <br />
            {postCode}, {district}
            <br />
            {city}, {location}
          </p>
        </Info>
        <Info>
          <b>Método de envio</b>
          <p>{deliveryMethod}</p>
        </Info>
        <Info custom>
          <b style={{ height: 62 }}>Data de envio</b>
          <p>
            Terça-feira
            <br />
            {deliveryDate}
            <br />
            {deliveryTime}
          </p>
        </Info>
        <ChangeInformationButton to="/delivery">
          Alterar Informações de Envio
        </ChangeInformationButton>
        <h1 style={{ marginTop: 26 }}>Produtos</h1>
        <ItemsList>
          {products.map(p => (
            <Item item={p} />
          ))}
        </ItemsList>
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
        <Warning>
          O pagamento da encomenda é efectuado no ato da entrega.
          <br /> A confirmação da sua encomenda será feita através de contacto
          telefónico pelos nossos colaboradores.
        </Warning>
      </Container>
    </>
  );
}
