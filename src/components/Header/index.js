import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, Item } from './styles';

import logo from '~/assets/logo.svg';

import menu from '~/assets/icons/menu.svg';
import search from '~/assets/icons/search.svg';
import close from '~/assets/icons/close.svg';
import person from '~/assets/icons/person.svg';
import person_active from '~/assets/icons/person_active.svg';
import basket from '~/assets/icons/basket.svg';
import basket_active from '~/assets/icons/basket_active.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Item to="/menu" active={pathname === '/menu'}>
        <img src={menu} alt="menu" />
      </Item>
      <Item to="/search" active={pathname === '/search'}>
        <img src={pathname === '/search' ? close : search} alt="search" />
      </Item>
      <Link to="/" style={{ marginRight: 10, marginLeft: 10, padding: 5 }}>
        <img src={logo} alt="Logo" />
      </Link>
      <Item to="/profile" active={pathname === '/profile'}>
        <img
          src={pathname === '/profile' ? person_active : person}
          alt="person"
        />
      </Item>
      <Item to="/basket" active={pathname === '/basket'}>
        <img
          src={pathname === '/basket' ? basket_active : basket}
          alt="basket"
        />
      </Item>
    </Container>
  );
}

export default Header;
