import React, { useState } from 'react';

import close from '~/assets/icons/close.svg';
import chevron_right from '~/assets/icons/chevron-right.svg';
import chevron_left_active from '~/assets/icons/chevron-left_active.svg';

import { menuCategories } from '~/data';

import { Container, Header, SubHeader, Item } from './styles';

export default function Menu() {
  const [openedCategory, setOpenedCategory] = useState('none');

  return (
    <Container>
      <Header>
        <button type="button">
          <img src={close} alt="Close Button" />
        </button>
      </Header>
      <SubHeader>Dúvidas? Fale connosco</SubHeader>
      {menuCategories.map(c => (
        <>
          <Item
            key={c.id}
            onClick={() => {
              if (openedCategory === c.title) setOpenedCategory('none');
              else setOpenedCategory(c.title);
            }}
            isOpen={openedCategory === c.title}
          >
            {c.childrenCategories.length !== 0 &&
              openedCategory === c.title && (
                <img
                  src={chevron_left_active}
                  alt="Close Category"
                  style={{ marginRight: 20 }}
                />
              )}
            {c.title}
            {c.childrenCategories.length !== 0 &&
              !(openedCategory === c.title) && (
                <img src={chevron_right} alt="Open Category" />
              )}
          </Item>
          {c.childrenCategories.length !== 0 &&
            openedCategory === c.title &&
            c.childrenCategories.map(e => (
              <Item key={e.id} style={{ color: '#A4B91D' }}>
                {e.title}
              </Item>
            ))}
        </>
      ))}
    </Container>
  );
}
