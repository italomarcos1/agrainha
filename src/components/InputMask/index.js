import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';
import InputMask from './inputmask';

export default function CustomInput({
  title,
  full,
  type,
  style,
  name,
  error,
  fontSize,
  ...rest
}) {
  const [mask, setMask] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    switch (type) {
      case 'date': {
        setMask('99/99/9999');
        setPlaceholder('DD/MM/YYYY');
        break;
      }
      case 'plate': {
        setMask('aa99 aa');
        setPlaceholder('AA99 AAA');
        break;
      }
      case 'dateAndHour': {
        setMask('99/99/9999 99:99');
        setPlaceholder('00/00/0000 00:00');
        break;
      }
      case 'phone': {
        setMask('99 999 99 99');
        setPlaceholder('00 000 00 00');
        break;
      }
      case 'nif': {
        setMask('999999999');
        setPlaceholder('000000000');
        break;
      }
      case 'sortCode': {
        setMask('99-99-99');
        setPlaceholder('00-00-00');
        break;
      }
      case 'code': {
        setMask('99');
        setPlaceholder('00');
        break;
      }
      case 'cost': {
        setMask('9,999.99');
        setPlaceholder('0,000.00');
        break;
      }
      case 'miles': {
        setMask('999,999');
        setPlaceholder('000,000');
        break;
      }
      default:
        setMask('99/99/9999');
    }
  }, []);

  return (
    <Container full={full} style={style} error={error}>
      <Title style={{ fontSize }} error={error}>
        {title}
      </Title>
      <InputMask name={name} placeholder={placeholder} mask={mask} {...rest} />
    </Container>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  type: PropTypes.string,
  full: PropTypes.bool,
  error: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomInput.defaultProps = {
  full: false,
  fontSize: 14,
  type: 'date',
  style: {},
};
