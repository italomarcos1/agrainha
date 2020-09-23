import React, { useCallback, useEffect } from 'react';

import Item from '~/components/Item';
import CheckoutHeader from '~/components/CheckoutHeader';

import data from '~/data';

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
          <p>Michel Oliveira</p>
        </Info>
        <Info>
          <b>NIF</b>
          <p>267182761</p>
        </Info>
        <Info>
          <b>NIF na Factura</b>
          <p>SIM</p>
        </Info>
        <Info>
          <b>Email</b>
          <p>gomakemoney@tgoo.pt</p>
        </Info>
        <Info>
          <b>Telemóvel</b>
          <p>+351 92 760 94 40</p>
        </Info>
        <Info custom>
          <b style={{ height: 62 }}>Morada</b>
          <p>
            Rua da Liberdade, 21
            <br />
            2740-164, Porto Salvo
            <br />
            Oeiras, Portugal Continental
          </p>
        </Info>
        <Info>
          <b>Método de envio</b>
          <p>Entrega em casa - Grátis</p>
        </Info>
        <Info custom>
          <b style={{ height: 62 }}>Data de envio</b>
          <p>
            Terça-feira
            <br />
            25 de Setembro de 2020
            <br />
            Entre 10:30h e 13:30h
          </p>
        </Info>
        <ChangeInformationButton to="/delivery">
          Alterar Informações de Envio
        </ChangeInformationButton>
        <h1 style={{ marginTop: 26 }}>Produtos</h1>
        <ItemsList>
          {data.map(p => (
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
