import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useValidation } from '~/context';

import Input from '~/components/Input';
import PhoneInput from '~/components/PhoneInput';
import InputMask from '~/components/InputMask';
import CheckoutHeader from '~/components/CheckoutHeader';
import RadioButton from '~/components/CustomRadioButton';

import { setInfo } from '~/store/modules/user/actions';

import { Container, CheckoutButton } from './styles';

export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector(state => state.user.info);

  const { nameIsValid, mailIsValid } = useValidation();

  const [nif, setNif] = useState(() => {
    return userData?.nif ? userData.nif : '';
  });

  const [invalidNif, setInvalidNif] = useState(false);

  const nifValidation = useMemo(() => {
    return new RegExp(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/);
  }, []);

  const nifIsValid = useCallback(() => {
    return nifValidation.test(nif);
  }, [nif, nifValidation]);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const phoneValidation = useMemo(() => {
    return new RegExp(/^[0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9]\s[0-9][0-9]$/);
  }, []);

  const [phone, setPhone] = useState(() => {
    return userData?.phone ? userData.phone : '';
  });
  const [invalidPhone, setInvalidPhone] = useState(false);

  const phoneIsValid = useCallback(() => {
    return phoneValidation.test(phone);
  }, [phone, phoneValidation]);

  const [countryCode, setCountryCode] = useState(() => {
    return userData?.countryCode ? userData.countryCode : '351';
  });

  const [wantsNif, setWantsNif] = useState(() => {
    return userData?.wantsNif ? userData.wantsNif : 'NÃO';
  });

  const [invalidFields, setInvalidFields] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = useCallback(
    formData => {
      const allData = Object.values(formData);

      delete formData.postCode;
      const data = Object.values(formData);

      const index = allData.findIndex(el => nameIsValid(el));

      if (index !== -1) {
        setInvalidFields(data.map(el => nameIsValid(el)));
        setInvalidPhone(!phoneIsValid());
        setInvalidNif(!nifIsValid());
        setInvalidEmail(!mailIsValid(email));

        return;
      }

      dispatch(
        setInfo({
          ...formData,
          countryCode,
          phone,
          nif,
          wantsNif,
        })
      );

      history.push('/delivery');
    },
    [
      dispatch,
      history,
      nameIsValid,
      mailIsValid,
      phoneIsValid,
      nifIsValid,
      countryCode,
      phone,
      email,
      nif,
      wantsNif,
    ]
  );

  return (
    <>
      <CheckoutHeader />
      <Container
        onSubmit={handleSubmit}
        style={{ height: 670 }}
        initialData={userData}
      >
        <Input
          name="name"
          title="Nome"
          style={{ marginTop: 0 }}
          placeholder="Informe seu nome"
          error={invalidFields[0]}
        />

        <Input
          name="nickname"
          title="Apelido"
          placeholder="Informe seu apelido"
          error={invalidFields[1]}
        />

        <Input
          name="email"
          title="Email"
          placeholder="Informe seu email"
          onChange={({ target: { value } }) => setEmail(value)}
          error={invalidEmail}
        />

        <PhoneInput
          name="phone"
          placeholder="00 000 00 00"
          mask="99 999 99 99"
          countryCode={countryCode}
          setCountryCode={value => setCountryCode(value)}
          value={phone}
          onChange={({ target: { value } }) => setPhone(value)}
          error={invalidPhone}
        />

        <InputMask
          title="NIF"
          name="nif"
          mask="999999999"
          placeholder="000000000"
          value={nif}
          onChange={({ target: { value } }) => setNif(value)}
          error={invalidNif}
          type="tel"
        />

        <RadioButton
          title="Deseja NIF na Factura?"
          option={wantsNif}
          setOption={value => setWantsNif(value)}
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
