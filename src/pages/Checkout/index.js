import React, { useCallback, useState } from 'react';

import Input from '~/components/Input';
import RadioButton from '~/components/CustomRadioButton';

import {
  Container,
  Header,
  SubHeader,
  Line,
  OptionContainer,
  OptionTitle,
  OptionNumber,
  CheckoutButton,
} from './styles';

import logo from '~/assets/logo.svg';

export default function Checkout() {
  const [wantsNif, setWantsNif] = useState('no');

  const handleSubmit = useCallback(formData => {
    console.log(formData); // eslint-disable-line
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <SubHeader>
        <OptionContainer>
          <OptionTitle>Informações</OptionTitle>
          <OptionNumber active>1</OptionNumber>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>Entrega</OptionTitle>
          <OptionNumber>2</OptionNumber>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>Pagamento</OptionTitle>
          <OptionNumber>3</OptionNumber>
        </OptionContainer>
        <Line />
      </SubHeader>

      <Container onSubmit={handleSubmit}>
        <Input name="name" title="Nome" style={{ marginTop: 0 }} />
        <Input name="nickname" title="Apelido" />
        <Input name="email" title="Email" />
        <Input name="phone" title="Telemóvel" />
        <Input name="nif" title="NIF" />
        <RadioButton
          title="Deseja NIF na Factura?"
          option={wantsNif}
          setOption={value => setWantsNif(value)}
        />
      </Container>
      <CheckoutButton to="/">Continuar</CheckoutButton>
    </>
  );
}
