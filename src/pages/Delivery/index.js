import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Input from '~/components/Input';
import InputMask from '~/components/InputMask';
import Select from '~/components/Select';
import CheckoutHeader from '~/components/CheckoutHeader';

import { useValidation } from '~/context';

import { setInfo } from '~/store/modules/user/actions';

import { Container, CheckoutButton } from './styles';

export default function Delivery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { nameIsValid, postCodeIsValid } = useValidation();

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.info);

  const [deliveryMethod, setDeliveryMethod] = useState(() => {
    return userData?.deliveryMethod
      ? userData.deliveryMethod
      : 'Entrega em casa - Grátis';
  });

  const [deliveryDate, setDeliveryDate] = useState(() => {
    return userData?.deliveryDate
      ? userData.deliveryDate
      : 'Data da entrega - 22/09/2020';
  });

  const [deliveryTime, setDeliveryTime] = useState(() => {
    return userData?.deliveryTime
      ? userData.deliveryTime
      : 'Entre 10:30h e 13:30h';
  });

  const [deliveryLocation, setDeliveryLocation] = useState(() => {
    return userData?.deliveryLocation
      ? userData.deliveryLocation
      : 'Nova Morada';
  });

  const [location, setLocation] = useState(() => {
    return userData?.location ? userData.location : 'Portugal Continental';
  });

  const history = useHistory();

  const [invalidFields, setInvalidFields] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [postCode, setPostcode] = useState(() => {
    return userData !== null ? userData.postCode : '';
  });

  const [invalidPostcode, setInvalidPostcode] = useState(false);

  const handleSubmit = useCallback(
    formData => {
      const allData = Object.values(formData);

      delete formData.postCode;
      const data = Object.values(formData);

      const index = allData.findIndex(el => nameIsValid(el));

      if (index !== -1) {
        setInvalidFields(data.map(el => nameIsValid(el)));
        setInvalidPostcode(!postCodeIsValid(postCode));

        return;
      }

      dispatch(
        setInfo({
          ...formData,
          postCode,
          deliveryMethod,
          deliveryDate,
          deliveryTime,
          deliveryLocation,
          location,
        })
      );

      history.push('/payment');
    },
    [
      dispatch,
      history,
      nameIsValid,
      postCode,
      postCodeIsValid,
      deliveryMethod,
      deliveryDate,
      deliveryTime,
      deliveryLocation,
      location,
    ]
  );

  return (
    <>
      <CheckoutHeader active={2} />
      <Container onSubmit={handleSubmit} initialData={userData}>
        <Select
          title="Método de entrega"
          options={['Entrega em casa - Grátis', 'Entrega em casa']}
          value={deliveryMethod}
          onChange={({ target: { value } }) => setDeliveryMethod(value)}
        />
        <Select
          title="Data da entrega"
          options={['Data da entrega - 22/09/2020']}
          value={deliveryDate}
          onChange={({ target: { value } }) => setDeliveryDate(value)}
        />
        <Select
          title="Horário da entrega"
          options={['Entre 10:30h e 13:30h']}
          value={deliveryTime}
          onChange={({ target: { value } }) => setDeliveryTime(value)}
        />

        <Select
          title="Morada para entrega"
          options={['Nova Morada']}
          value={deliveryLocation}
          onChange={({ target: { value } }) => setDeliveryLocation(value)}
        />

        <InputMask
          title="Código Postal"
          name="postCode"
          mask="9999-999"
          placeholder="0000-000"
          value={postCode}
          onChange={({ target: { value } }) => setPostcode(value)}
          error={invalidPostcode}
        />

        <Input
          name="place"
          title="Morada"
          placeholder="Rua 7 de Junho"
          error={invalidFields[0]}
        />
        <Input
          name="number"
          title="Número/Andar"
          placeholder="23 RC"
          error={invalidFields[1]}
        />
        <Input
          name="district"
          title="Distrito"
          placeholder="Porto Salvo"
          error={invalidFields[2]}
        />
        <Input
          name="city"
          title="Cidade"
          placeholder="Oeiras"
          error={invalidFields[3]}
        />

        <Select
          title="Localidade"
          options={['Portugal Continental']}
          value={location}
          onChange={({ target: { value } }) => setLocation(value)}
        />
        <button id="submitButton" type="submit" style={{ display: 'none' }}>
          SubmitButton
        </button>
      </Container>
      <CheckoutButton
        onClick={() => document.getElementById('submitButton').click()}
      >
        Continuar
      </CheckoutButton>
    </>
  );
}
