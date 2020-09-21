import React, { useState } from 'react';
import {
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
} from './styles';

import data from '~/data';

import minus from '~/assets/icons/minus.svg';
import plus from '~/assets/icons/plus.svg';
import close from '~/assets/icons/close.svg';

export default function Basket() {
  const [amount, setAmount] = useState(10);
  return (
    <Container>
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
                <Price style={{ alignSelf: 'center' }}>&euro;{newPrice}</Price>
              </Options>
            </Item>
          );
        })}
      </ItemsList>
    </Container>
  );
}
