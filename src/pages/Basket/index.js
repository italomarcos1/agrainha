import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Container,
  Item,
  ItemsList,
  ItemPicture,
  Title,
  Price,
  ProductInfo,
  Separator,
  Options,
  DeleteItem,
  Warning,
  ShippingWarning,
  CheckoutButton,
} from './styles';

import data from '~/data';

import minus from '~/assets/icons/minus.svg';
import plus from '~/assets/icons/plus.svg';
import close from '~/assets/icons/close.svg';
import chevron_left from '~/assets/icons/chevron-left.svg';

export default function Basket() {
  const [amount, setAmount] = useState(10);
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
          {data.map(p => {
            const { id, picture, title, newPrice } = p;

            return (
              <Item key={id}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <ItemPicture src={picture} />
                  <ProductInfo>
                    <Title>{title}</Title>
                    <Price>&euro;{newPrice}</Price>
                  </ProductInfo>
                </div>
                <Separator />
                <Options>
                  <DeleteItem>
                    <img src={close} alt="Delete Item" />
                  </DeleteItem>
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
                  <Price style={{ alignSelf: 'center' }}>
                    &euro;{newPrice}
                  </Price>
                </Options>
              </Item>
            );
          })}
        </ItemsList>
      </Container>
      <CheckoutButton to="/checkout">Continuar</CheckoutButton>
    </>
  );
}
