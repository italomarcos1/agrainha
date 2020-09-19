import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';

export default function Title({ children }) {
  return <Content>{children}</Content>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
