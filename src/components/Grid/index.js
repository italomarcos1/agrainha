import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Grid({ children }) {
  return <Container>{children}</Container>;
}

Grid.propTypes = {
  children: PropTypes.element.isRequired,
};
