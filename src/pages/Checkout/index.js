import React, { useCallback, useState } from 'react';

import Input from '~/components/Input';
import PhoneInput from '~/components/PhoneInput';
import InputMask from '~/components/InputMask';
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
  const [phone, setPhone] = useState('');
  const [nif, setNif] = useState('');

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

      <Container onSubmit={handleSubmit} style={{ height: 900 }}>
        <Input name="name" title="Nome" style={{ marginTop: 0 }} />
        <Input name="nickname" title="Apelido" />
        <Input name="email" title="Email" />

        <PhoneInput
          name="phone"
          placeholder="00 000 00 00"
          mask="99 999 99 99"
          value={phone}
          onChange={({ target: { value } }) => setPhone(value)}
        />

        {/* <input
          type="text"
          list="days"
          placeholder="Choose a Day"
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#303',
          }}
        />
        <datalist id="days" /> */}

        <InputMask
          title="NIF"
          name="nif"
          type="nif"
          value={nif}
          onChange={({ target: { value } }) => setNif(value)}
        />
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
