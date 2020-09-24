import React from 'react';
import PropTypes from 'prop-types';

import Select from './components/CountryCodeSelect';
import InputMask from '~/components/InputMask/inputmask';

import { Container, Title } from './styles';

import { phoneCodes } from '~/data';

function PhoneInput({
  name,
  placeholder,
  setCountryCode,
  countryCode,
  mask,
  style,
  error,
  ...rest
}) {
  return (
    <Container style={style} error={error}>
      <Title error={error}>Telemóvel</Title>
      <div>
        <Select
          options={phoneCodes}
          onChange={({ target: { value } }) => {
            setCountryCode(value);
          }}
          value={countryCode}
        />
        <InputMask
          name={name}
          placeholder={placeholder}
          mask={mask}
          {...rest}
        />
      </div>
    </Container>
  );
}

PhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  setCountryCode: PropTypes.func.isRequired,
  countryCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

PhoneInput.defaultProps = {
  style: {},
};

export default PhoneInput;
