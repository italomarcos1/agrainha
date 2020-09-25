import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function InputMask({ name, type, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField /* error */ } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',

      setValue(ref, value) {
        ref.setInputValue(value);
      },

      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return <ReactInputMask ref={inputRef} {...rest} type={type} />;
}

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
