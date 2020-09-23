import React, { useCallback, useEffect, useState } from 'react';

import Input from '~/components/Input';
import PhoneInput from '~/components/PhoneInput';
import InputMask from '~/components/InputMask';
import CheckoutHeader from '~/components/CheckoutHeader';
import RadioButton from '~/components/CustomRadioButton';

import { Container, CheckoutButton } from './styles';

export default function Checkout() {
  const [wantsNif, setWantsNif] = useState('no');
  const [phone, setPhone] = useState('');
  const [nif, setNif] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = useCallback(formData => {
    console.log(formData); // eslint-disable-line
  }, []);

  return (
    <>
      <CheckoutHeader />

      <Container onSubmit={handleSubmit}>
        <Input
          name="name"
          title="Nome"
          style={{ marginTop: 0 }}
          placeholder="Informe seu nome"
        />
        <Input
          name="nickname"
          title="Apelido"
          placeholder="Informe seu apelido"
        />
        <Input name="email" title="Email" placeholder="Informe seu email" />

        <PhoneInput
          name="phone"
          placeholder="00 000 00 00"
          mask="99 999 99 99"
          value={phone}
          onChange={({ target: { value } }) => setPhone(value)}
        />

        <InputMask
          title="NIF"
          name="nif"
          mask="999999999"
          placeholder="000000000"
          value={nif}
          onChange={({ target: { value } }) => setNif(value)}
        />
        <RadioButton
          title="Deseja NIF na Factura?"
          option={wantsNif}
          setOption={value => setWantsNif(value)}
        />
      </Container>
      <CheckoutButton to="/delivery">Continuar</CheckoutButton>
    </>
  );
}
