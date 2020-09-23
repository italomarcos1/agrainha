import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './styles';

export default function CustomSelect({ options, style }) {
  return (
    <Select style={style}>
      {options.map(o => (
        <option value={o.code}>{`${o.country} +${o.code}`}</option>
      ))}
    </Select>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomSelect.defaultProps = {
  style: {},
};
