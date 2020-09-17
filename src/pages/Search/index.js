import React from 'react';

import search from '~/assets/icons/search.svg';

import { Container, SearchBar } from './styles';

export default function Search() {
  return (
    <Container>
      <SearchBar>
        <div>
          <input type="text" placeholder="O que procura hoje?" />
          <button type="button" onClick={() => {}}>
            <img src={search} alt="search" />
          </button>
        </div>
      </SearchBar>
    </Container>
  );
}
