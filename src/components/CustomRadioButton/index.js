import React from 'react';
import PropTypes from 'prop-types';

import RadioButtonContainer from '../GreenRadioButtonContainer';
import RadioButton from '../GreenRadioButton';

function CustomRadioButton({ title, option, setOption, style }) {
  return (
    <RadioButtonContainer style={style}>
      <small>{title}</small>
      <div>
        <span>
          <RadioButton
            selected={option === 'SIM'}
            onClick={() => setOption('SIM')}
          />
          SIM
        </span>
        <span>
          <RadioButton
            style={{ marginLeft: 16 }}
            selected={option === 'NÃO'}
            onClick={() => setOption('NÃO')}
          />
          NÃO
        </span>
      </div>
    </RadioButtonContainer>
  );
}

CustomRadioButton.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  setOption: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomRadioButton.defaultProps = {
  style: {},
};

export default CustomRadioButton;
