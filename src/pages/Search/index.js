import React from 'react';

import Cashback from '~/components/Cashback';

import mainBanner from '~/assets/banners/a-grainha-banner-1@2x.png';
import acp from '~/assets/banners/acp@2x.png';
import parceiro1 from '~/assets/banners/parceiro-1@2x.png';
import parceiro2 from '~/assets/banners/parceiro-2@2x.png';

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
    </Container>
  );
}
