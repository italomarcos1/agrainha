import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './styles';

export default function CountryCodeSelect({ options, style }) {
  return (
    <Select style={style}>
      {options.map(o => (
        <option value={o}>{`${o.country} +${o.code}`}</option>
      ))}
    </Select>
  );
}

CountryCodeSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CountryCodeSelect.defaultProps = {
  style: {},
};
