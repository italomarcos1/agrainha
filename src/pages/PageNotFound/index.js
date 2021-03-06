import React from 'react';

import { Container, Title, Subtitle, ChangeInformationButton } from './styles';

export default function PageNotFound() {
  return (
    <>
      <Container>
        <Title>Que pena :/</Title>
        <Subtitle>A página que procura não foi encontrada.</Subtitle>

        <ChangeInformationButton to="/">
          Retornar à Página Inicial
        </ChangeInformationButton>
      </Container>
    </>
  );
}
