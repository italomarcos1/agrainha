import React, { useCallback, useEffect, useState } from 'react';

import Input from '~/components/Input';
import InputMask from '~/components/InputMask';
import Select from '~/components/Select';
import CheckoutHeader from '~/components/CheckoutHeader';

import { Container, CheckoutButton } from './styles';

export default function Delivery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = useCallback(formData => {
    console.log(formData); // eslint-disable-line
  }, []);

  const [postCode, setPostcode] = useState('');

  return (
    <>
      <CheckoutHeader active={2} />
      <Container onSubmit={handleSubmit} style={{ height: 720 }}>
        <Select
          title="Método de entrega"
          options={['Entrega em casa - Grátis']}
        />
        <Select
          title="Data da entrega"
          options={['Data da entrega - 22/09/2020']}
        />
        <Select
          title="Horário da entrega"
          options={['Entre 10:30h e 13:30h']}
        />

        <Select title="Morada para entrega" options={['Nova Morada']} />

        <InputMask
          title="Código Postal"
          name="postCode"
          mask="9999-9999"
          placeholder="0000-000"
          value={postCode}
          onChange={({ target: { value } }) => setPostcode(value)}
        />

        <Input name="place" title="Morada" placeholder="Rua 7 de Junho" />
        <Input name="number" title="Número/Andar" placeholder="23 RC" />
        <Input name="district" title="Distrito" placeholder="Porto Salvo" />
        <Input name="city" title="Cidade" placeholder="Oeiras" />

        <Select title="Localidade" options={['Portugal Continental']} />
      </Container>
      <CheckoutButton to="/payment">Continuar</CheckoutButton>
    </>
  );
}
