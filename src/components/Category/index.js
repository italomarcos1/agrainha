import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Name, DarkLayer } from './styles';

export default function Category({ category }) {
  return (
    <Container index={category.id}>
      <Image src={category.image} />
      {/* <DarkLayer /> */}
      <Name>{category.name}</Name>
    </Container>
  );
}

Category.propTypes = {
  category: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
