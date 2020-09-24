import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Select } from './styles';

export default function CustomSelect({ title, options, style, ...rest }) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Select style={style} {...rest}>
        {options.map(o => (
          <option value={o}>{o}</option>
        ))}
      </Select>
    </Container>
  );
}

CustomSelect.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomSelect.defaultProps = {
  style: {},
};
