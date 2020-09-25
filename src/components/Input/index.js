import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container, Title, Input } from './styles';

export default function CustomInput({
  name,
  title,
  full,
  fontSize,
  style,
  type,
  error,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField /* error */ } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container full={full} style={style}>
      <Title style={{ fontSize }} error={error}>
        {title}
      </Title>
      <Input
        name={name}
        placeholder="Type here..."
        error={error}
        ref={inputRef}
        defaultValue={defaultValue}
        type={type}
        {...rest}
      />
    </Container>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  fontSize: PropTypes.number,
  full: PropTypes.bool,
  error: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomInput.defaultProps = {
  full: false,
  fontSize: 14,
  type: 'text',
  style: {},
};
