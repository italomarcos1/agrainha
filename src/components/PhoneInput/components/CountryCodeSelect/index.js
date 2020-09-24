import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './styles';

export default function CountryCodeSelect({ options, style, error, ...rest }) {
  return (
    <Select style={style} error={error} {...rest}>
      {options.map(o => (
        <option value={o.code}>{`${o.country} +${o.code}`}</option>
      ))}
    </Select>
  );
}

CountryCodeSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
  error: PropTypes.bool,
};

CountryCodeSelect.defaultProps = {
  style: {},
  error: false,
};
