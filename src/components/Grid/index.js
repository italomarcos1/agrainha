import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Grid({ children, height }) {
  return <Container style={{ height }}>{children}</Container>;
}

Grid.propTypes = {
  children: PropTypes.element.isRequired,
  height: PropTypes.number.isRequired,
};
