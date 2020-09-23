import React from 'react';
import PropTypes from 'prop-types';

import Select from './components/CountryCodeSelect';
import InputMask from '~/components/InputMask/inputmask';

import { Container, Title } from './styles';

import { phoneCodes } from '~/data';

function PhoneInput({ name, placeholder, mask, style, ...rest }) {
  return (
    <Container style={style}>
      <Title>Telemóvel</Title>
      <div>
        <Select options={phoneCodes} />
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
  title: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

PhoneInput.defaultProps = {
  style: {},
};

export default PhoneInput;
