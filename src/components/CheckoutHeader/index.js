import React from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  SubHeader,
  Line,
  OptionContainer,
  OptionTitle,
  OptionNumber,
} from './styles';

import logo from '~/assets/logo.svg';

export default function CheckoutHeader({ active }) {
  return (
    <>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <SubHeader>
        <OptionContainer to="/checkout">
          <OptionTitle>Informações</OptionTitle>
          <OptionNumber active>1</OptionNumber>
        </OptionContainer>
        <OptionContainer to="/delivery">
          <OptionTitle>Entrega</OptionTitle>
          <OptionNumber active={active === 2 || active === 3}>2</OptionNumber>
        </OptionContainer>
        <OptionContainer to="/payment">
          <OptionTitle>Pagamento</OptionTitle>
          <OptionNumber active={active === 3}>3</OptionNumber>
        </OptionContainer>
        <Line />
      </SubHeader>
    </>
  );
}

CheckoutHeader.propTypes = {
  active: PropTypes.number,
};

CheckoutHeader.defaultProps = {
  active: 1,
};
